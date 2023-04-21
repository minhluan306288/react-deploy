
export default function PageSignup(){
   return (
      <section className="App h-screen w-full flex justify-center mt-7">
      <div className="w-full max-w-md" >
        <form action="" className="bg-slate-50 shadow-md rounded px-8 py-8 pt-8">
          <h2 className="text-lg font-medium text-center mb-4 text-blue-600">Register new account</h2>
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
            <input type="email" name="email" id="" className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
            <input type="password" name="email" id="" className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" />
          </div>
          <div className="text-center">
            <button className="leading-none bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
            <button className="leading-none border-blue-500 ml-2 border hover:bg-blue-50 hover:text-blue-500 text-blue-500 font-bold mx-auto py-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Login</button>
          </div>
        </form>
      </div>
    </section>
   )
}