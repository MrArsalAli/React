

function App() {
  const products = [
    {
      name: "Razor Deathly 16", src: "https://images.unsplash.com/photo-1586712308574-566bd05e816e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEdhbWluZyUyMG1vdXNlc3xlbnwwfHwwfHx8MA%3D%3Ds",
      id: 1,
    },
    {
      name: "Logitech DeepLash 12", src: "https://images.unsplash.com/photo-1554876194-024e06bbc3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEdhbWluZyUyMG1vdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      id: 2,
    },
    {
      name: "Logitech Lg305", src: "https://images.unsplash.com/photo-1619334084724-eefc4ee92e35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEdhbWluZyUyMG1vdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      id: 3,
    },
    {
      name: "Byte g35", src: "https://images.unsplash.com/photo-1618499890638-3a0dd4b278b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdhbWluZyUyMG1vdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      id: 4,
    },
    {
      name: "Gizmo ip59", src: "https://images.unsplash.com/photo-1617233082866-9d9c58674778?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BlY2lhbCUyMG1vdXNlc3xlbnwwfHwwfHx8MA%3D%3D",
      id: 5,
    },
    {
      name: "Vortex gh87", src: "https://images.unsplash.com/photo-1520609930-0fe8db30fd0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGt1aXluJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      id: 6,
    },
    {
      name: "Vortex L22", src: "https://images.unsplash.com/photo-1518129353211-72dadec55cfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGt1aXluJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      id: 7,
    },
    {
      name: "Raven br56", src: "https://plus.unsplash.com/premium_photo-1661628680845-39b71e9be303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW91c2V8ZW58MHx8MHx8fDA%3D",
      id: 8,
    }
  ]
  return (
    <section className="flex flex-row flex-wrap text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((data) => (
            <div key={data.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={data.src}
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {data.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>


  )
}

export default App
