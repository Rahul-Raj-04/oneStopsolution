export function Card() {
  return (
    <div className="w-full p-8  bg-[#ededed] ">
      <div className="text-[50px] font-bold text-center  text-[#357ebd] italic overflow-hidden">
        {" "}
        हमारे द्वारा दी जाने वाली सेवाएं
      </div>
      <div className="w-[80%] flex  flex-wrap flex-row gap-4 text-center py-8   ml-[200px] cursor-pointer">
        <div className="w-[350px] rounded-md border items-center   hover:shadow-2xl">
          <img
            src="https://www.onlinecybercafe.com/images/information.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">INFORMATION</h1>
            <div className="mt-3  text-gray-600 text-2xl">
              सभी प्रकार की सरकारी जॉब और ऑनलाइन फार्म की जानकारी प्राप्त करें।
            </div>
          </div>
        </div>
        <div className="w-[350px] rounded-md border  hover:shadow-2xl">
          <img
            src="https://www.onlinecybercafe.com/images/apply-now.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">ONLINE FORM </h1>
            <div className="mt-3 text-2xl text-gray-600 ">
              सभी प्रकार की सरकारी जॉब के लिए आवेदन करें,EXAM पेपर टाइप करवाये,
              घर बैठे हिन्दी में लेटर टाइप करवाये। सभी प्रकार के हिन्दी जॉब वर्क
              के लिए सम्पर्क करें।
            </div>
          </div>
        </div>
        <div className="w-[350px] rounded-md border  hover:shadow-2xl">
          <img
            src="https://www.onlinecybercafe.com/images/admit-card.jpg"
            alt="Laptop"
            className="h-[200px] w-[350px] rounded-md"
          />
          <div className="p-4">
            <h1 className="text-2xl font-semibold">ADMIT CARD</h1>
            <div className="mt-3 text-gray-600 text-2xl">
              एडमिट कार्ड, रिजल्ट घर बैठे अपने मोबाइल पर प्राप्त करें।
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-row flex-wrap gap-4 text-center  ml-[200px] cursor-pointer ">
        <div className="w-[350px] rounded-md border items-center  hover:shadow-2xl">
          <img
            src="https://www.onlinecybercafe.com/images/typing.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">TYPING</h1>
            <div className="mt-3 text-2xl text-gray-600">
              घर बैठे वायोडेटा⁄सीवी⁄रिजूमे बनवाये। और टाइप हुयी फाइल पीडीएफ या
              डॉक्स में अपने नम्बर या ईमेल पर प्राप्त करें।
            </div>
          </div>
        </div>
        <div className="w-[350px] rounded-md border  hover:shadow-2xl">
          <img
            src="https://www.onlinecybercafe.com/images/download.jpg"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">INTERNET </h1>
            <div className="mt-3 text-2xl text-gray-600">
              इन्टरनेट कैफे सम्बन्धी जानकारी के लिए सम्पर्क करें-
            </div>
          </div>
        </div>
        <div className="w-[350px] rounded-md border  hover:shadow-2xl ">
          <img
            src="https://www.onlinecybercafe.com/images/scolaership.jpg"
            alt="Laptop"
            className="h-[200px] w-[350px] rounded-md"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold">SCHOLARSHIPS</h1>
            <div className="mt-3 text-2xl text-gray-600">
              किसी भी स्कॉलरशिप फॉर्म आदि के लिए संपर्क करें।
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
