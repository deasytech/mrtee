import ContactForm from "@/components/frontend/contact-form"

const Page = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-3 items-center justify-center h-96 bg-cover bg-fixed bg-parallax w-full text-white">
        <h1 className="text-heading1-bold">Contact Us</h1>
        <p>keep in touch with us</p>
      </div>
      <div className="container flex flex-col md:flex-row gap-6 mt-12">
        <div className="w-full">
          <h3 className="text-heading4">Contact Information</h3>
          <p className="text-gray-600 text-small-medium mt-3">We are always available to hear from you and how we can serve you better.</p>
          <hr className="my-6 max-w-lg" />
          <div className="space-y-3">
            <p className="text-gray-600 text-small-medium"><span className="font-bold">Address:</span> <br /> SF 02 Second Floor, <br />A4C Executive Mall,<br /> Beside Dayan Gold Plaza,<br /> Taiwo Street,<br /> Mandilas Lagos</p>
            <p className="text-gray-600 text-small-medium"><span className="font-bold">Phone:</span> +234 (703) 292-0367</p>
            <p className="text-gray-600 text-small-medium"><span className="font-bold">Email:</span> info@mrteeluxurystore.com.ng</p>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-heading4">Got Any Questions?</h3>
          <p className="text-gray-600 text-small-medium mt-3">Use the form below to get in touch with the sales team</p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page