export function OnlineForm() {
  return (
    <section>
      <div className="px-2 lg:flex lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="my-10 lg:my-0 lg:px-10">
            <h2 className="text-xl font-bold  text-black sm:text-4xl lg:text-3xl">
              ऑनलाइन फार्म के लिए अपने डॉक्यूमेंट्स भेजें
            </h2>
            <div className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              सभी प्रकार के ऑनलाइन फार्म भरवाने के लिए जो जरूरी डॉक्युमेंट्स है
              वो आप हमें अपने मोबाइल से फोटो क्लिक करके भेज सकते है{" "}
              <div className="font-bold whitespace-pre ">
                नोट- आपके द्वारा भेजे गए डॉक्यूमेंटस बिलकुल साफ व पढ़ने योग्य
                होने चाहिए।
              </div>
              किसी भी प्रकार के ऑनलाइन फॉर्म को आपके द्वारा वेरिफाई करवाने के
              बाद ही फाइनल सबमिट किया जायेगा। अपने Document भेजने के लिए आप
              WhatsApp का प्रयोग कर सकते हैं या ईमेल द्वारा भेज सकते है। ईमेल है
              - rahulkumarofficial36@gmail.com
            </div>

            <form action="#" method="POST" className="mt-8 max-w-xl">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                    type="email"
                    placeholder="Email"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full lg:w-1/2 rounded-md">
          <img
            src="https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="ManWith Laptop"
            className="h-full w-full rounded-[] object-cover p-8"
          />
        </div>
      </div>
    </section>
  );
}
