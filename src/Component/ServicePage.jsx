export default function ServicePage() {
  return (
    <>
      <div className="w-full h-[700px] bg-slate-500 rounded-md">
        <div className="w-[100%] h-[350px]  flex flex-row text-center rounded  mt-[100px]">
          <img
            className=" rounded-[50px] w-[50%] h-[600px] m-4 p-[20px]  "
            src="https://www.onlinecybercafe.com/images/save-time.jpg"
            alt=""
          />
          <div className="w-20% mt-[200px] text-lg text-white flex flex-col">
            <h1 className="text-lg[1700px] "> समय बचायें और घर पर रहें</h1>
            <div className="w-[80%]">
              {" "}
              अब आप घर बैठे अपना महत्वपूर्ण समय बचाकर, भीड़-भाड़ से मुक्त हो कर,
              किसी भी प्रकार की सरकारी या प्राइवेट जॉब आवेदन की सुविधा के लिए हम
              से सम्पर्क करें। आप बेफिक्र हो कर 100 प्रतिशत यकीन के साथ हम से
              संपर्क कर सकते हैं।
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
