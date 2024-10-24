"use client"
export default function cv() {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = "/your-cv.pdf"
        link.download = "your-cv.pdf"
        link.click()
    }
    return (

        <>

            <div className="h-[50vh] bg-slate-500 flex justify-center items-center">
                <button>

                    <img src="done.png" className="bg-black" onClick={handleDownload} />
                </button>
            </div>
        </>
    );
}
