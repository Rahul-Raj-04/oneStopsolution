function ContactUs() {
  return (
    <>
      <div className=" w-[100%] h-[auto] pt-[100px] pb-8">
        <div className="w-[100%]  flex flex-col pl-[70px] text-2xl gap-4 pb-8 ">
          <div className="text-3xl">HAPPY TO HELP YOU Address</div>
          <div className=" text-red-500">
            SHANTI BHAWAN LEDAURA GAHAJI AZAMGARH 223221
          </div>
          <div className="">Contact No: +919820035336</div>
          <div className="text-red-600">
            Email Id : rahulkumaroffial36@gmail.com{" "}
          </div>
          <div className="">Website : www.onestopdigitalsolution.com </div>
          <div className=" text-sm">Timing : 10:00 AM - 07:00 PM</div>
        </div>

        <iframe
          className="w-[100%] pt-3"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3268.5132751614906!2d82.95477184604458!3d26.17633286322689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ab66e1641a81%3A0x7201519abe72ae8f!2sShanti%20Bhavan%20(Amit%20bhai)!5e1!3m2!1sen!2sin!4v1699303456863!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default ContactUs;
