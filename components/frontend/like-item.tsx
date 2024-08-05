"use client"

import { useUser } from "@clerk/nextjs";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

interface LikeItemProps {
  productId: string;
  updateSignedInUser?: (updatedUser: TUser) => void;
}

const LikeItem = ({ productId, updateSignedInUser }: LikeItemProps) => {
  const { user } = useUser();
  const router = useRouter();

  const [ signedInUser, setSignedInUser ] = useState<TUser | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ isLiked, setIsLiked ] = useState(false);

  const getUser = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users");
      const data = await res.json();
      setSignedInUser(data);
      setIsLiked(data.wishList.includes(productId));
    } catch (error) {
      console.log("[users_GET]", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [ productId ]);

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [ user, getUser ]);

  const handleLike = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      if (!user) {
        router.push("/sign-in");
        return;
      } else {
        setLoading(true);
        const res = await fetch("/api/users/wishlist", {
          method: "POST",
          body: JSON.stringify({ productId: productId })
        });
        const updatedUser = await res.json();
        setSignedInUser(updatedUser);
        setIsLiked(updatedUser.wishList.includes(productId));
        updateSignedInUser && updateSignedInUser(updatedUser);
      }
    } catch (error) {
      console.log("[wishlist_POST]", error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <button type="button" onClick={handleLike}>
      <HeartIcon fill={`${isLiked ? "red" : "white"}`} />
    </button>
  )
}

export default LikeItem
