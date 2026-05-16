export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full py-36 bg-blue-50">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="font-bold tracking-tight text-4xl md:text-5xl">
            Contact us
          </h1>
          <p className="mx-auto mb-10 text-gray-500 leading-tight">
            If you have any questions, feel free to reach out
          </p>

          <div className="flex flex-col align-middle justify-center mt-10 p-8">
            <p className="text-gray-500 text-center my-1">
              Email:{' '}
              <a
                href="mailto:sofiabfitt@gmail.com"
                className="text-blue-800 hover:underline hover:underline-offset-4"
              >
                sofiabfitt@gmail.com
              </a>
            </p>

            <p className="text-gray-500 text-center my-1">
              Instagram:{' '}
              <a
                href="https://www.instagram.com/sofiabfit/"
                className="text-blue-800 hover:underline hover:underline-offset-4"
              >
                @sofiabfit
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
