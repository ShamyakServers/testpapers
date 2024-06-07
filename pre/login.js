import { signIn, getProviders, getSession, signOut } from "next-auth/react";
import {useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';
import Head from 'next/head';
import { AiFillLock } from 'react-icons/ai';

function signin({ providers }) {
  const [creds, setCreds] = useState({email: '', password:''})
  const onChange = (e) => { 
    setCreds({...creds, [e.target.name]: e.target.value})
  }
  return (
    // <div>
    //   {Object.values(providers).map((provider) => {
    //     return (
    //       <div key={provider.name}>
    //         <button onClick={() => signIn(provider.id)}>
    //           Sign in with {provider.name}
    //         </button>
    //       </div>
    //     );
    //   })}
    // </div>
    <>
    <style>
      body{
        background-image:- url("/Designer.jpeg")
      }
    </style>
      <Head>
      </Head>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <ToastContainer
          position={process.env.NEXT_PUBLIC_TOAST_TYPE}
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://source.unsplash.com/500x500/?code,python"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">Sign in to your account</h2>
            <div className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href={'/signup'} className="font-medium text-gray-600 hover:text-gray-500 cursor-pointer">Signup</Link>
            </div>
          </div>
          <form className="mt-8 space-y-6 flex flex-col justify-end" action="#" method="POST" >
            {Object.values(providers).map((provider) => {
              if (provider.name == "Credentials") {
                return (
                  <div className="rounded-md shadow-sm -space-y-px" key={provider.name}>
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        value={creds.email}
                        onChange={onChange}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        value={creds.password}
                        onChange={onChange}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                )
              }
            })}

            <div className="flex items-center justify-between">

              {/* <div ref={googleButton}></div> */}

              <div className="text-sm">
                <Link href={'/forgot'} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer" >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={(e)=>{
                  e.preventDefault()

                  signIn('credentials', {
                    redirect:false,
                    email: creds.email,
                    password:creds.password
                  })
                }}
                // onClick={handleSubmit}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"

              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <AiFillLock className="h-5 w-5 text-blue-500 group-hover:text-gray-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <h3 className="text-2xl text-center">Sign in with other providers</h3>

          <div className="text-center">
            {Object.values(providers).map((provider) => {
              if (provider.name == 'Google') {
                return (
                  <div key={provider.name}>
                    <button type="button" onClick={() => { signIn(provider.id) }} className="">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-8" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                    </button>
                  </div>)
              }
            
})}

          </div>
        </div>
      </div>
    </>
  )
};
export default signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await getProviders(),
      // csrfToken: await csrfToken(context),
    },
  };
}




function SignIn({providers}) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome back. We exist to make entrepreneurship easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                        <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                  <div className="text-gray-400">Or, sign in with your email</div>
                  <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Password (at least 10 characters)" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-400 ml-2">Keep me signed in</span>
                        </label>
                        <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-400 text-center mt-6">
                  Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}