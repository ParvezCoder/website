import Image from "next/image"
import AAi from "../../../../public/AAi.png"
import A1 from "../../../../public/AI11.jpg"
import chatbot5 from "../../../../public/chatbot5.jpg"
import chatbot2 from "../../../../public/chatbot4.jpg"
import software from "../../../../public/software.jpg"
import cloud from "../../../../public/clould.jpg"


const TopTechnology = () => {
    const TopTechnology = [
        { title: "AI Robot", Description: "An AI robot is a physical or virtual entity equipped with artificial intelligence.", imagee: AAi },
        { title: "Artificial intelligence", Description: "AI is a set of technologies that enable computers to perform a variety of advanced", imagee: A1 },
        { title: "AI ChatBot", Description: "AI chatbot is a set of technologies that are based primarily on machine learning and deep learning", imagee: chatbot5 },
        { title: "BlockChain", Description: "Blockchain is a decentralized and distributed digital ledger technology", imagee: chatbot2 },
        { title: "Internet of things", Description: "IoT refers to the network of interconnected devices  and systems that communicate and exchange the data", imagee: software },
        { title: "Clould Computing", Description: "Cloud computing is a technology that delivers computing resources and services over the internet", imagee: cloud },
    ]
    return (
        <div className="bg-gray-100 md:px-10 px-4 py-12  font-[sans-serif] text-center">
            {/* ////////////////////////////////////////////////////   Start  Techmology  ////////////////////////////////////////////////////////////////////////  */}
            <h2 className="text-4xl font-extrabold text-gray-800 mb-5 ">Top Technology in 2024</h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-20" >The world is rapidly changing and moving towards AI and robotics.</p>

            <div className="max-md:max-w-lg mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TopTechnology.map((items) => {
                        return (

                            <div key={items.title} className="bg-gradient-to-b from-blue-800 to-blue-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                                <Image src={items.imagee} alt={items.title} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{items.title}</h3>
                                    <p className="text-sm opacity-75">{items.Description}</p>
                                    <a href="javascript:void(0);" className="mt-4 inline-block text-red-800 font-semibold text-sm hover:underline">Read More</a>
                                </div>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
            {/* ///////////////////////////////////////////////////>>>>> technology end <<<<<<< ////////////////////////////////////////////////////// */}
        </div>
    )
}

export default TopTechnology