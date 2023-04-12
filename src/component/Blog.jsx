import React from 'react';
import PageTopStyle from './PageTopStyle';


const Blog = () => {
    return (
        <div>
            <PageTopStyle>Blog</PageTopStyle>
            <div className=' bg-slate-50 grid gap-4'>
                <div className='text-center'>
                    <h1 className='py-8 font-bold animate-pulse  w-10/12 mx-auto text-7xl'>Question & Answer</h1>

                </div>
                {/* Context api */}
                <div className="collapse md:w-6/12 container mx-auto bg-white rounded-lg shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        When do we use Context API?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>
                            Context Api is  added in version 16.3 of React that allows one to share state across the entire app. It is a primarily fetched data which is accesible throug-out many components. Normally a root component get the data by fetching and after that throug a react provider it give the access of same data in all component under the root component . To spread Out the data a context api called <span className='font-bold'>useContext</span> is used genarally.This inversion of context api made our code cleaner in many cases by reducing the amount of props that need to pass through a application and giving more control to the root components. There is no limitation in the children to use the access of data
                        </p>
                    </div>
                </div>
                {/* What is custom hook */}
                <div className="collapse md:w-6/12 container mx-auto bg-white rounded-lg shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        What is custom hook?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>

                            Hooks are reusable functions. When we have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". such as:
                            <ul className='list-disc indent-2 ml-7'>
                                <li>useFetch</li>
                                <li>useContext</li>
                                <li>useNavigate</li>
                                <li>useNavigation</li>
                            </ul>

                            <span>
                                Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value and makes changes of values), but every time you use a custom Hook, all state and effects inside of it are fully isolated.
                            </span>
                        </p>
                    </div>
                </div>
                {/* What does it mean by useRef? */}
                <div className="collapse md:w-6/12 container mx-auto bg-white rounded-lg shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        What does it mean by useRef?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>
                            Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. Example as below : <br />
                            <img className='py-3' src="https://i.ibb.co/ZfQzBPv/useRef.png" alt="" />
                            <br />
                            The hook useRef() in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function useRef() . The returned object will persist for the full lifetime of the component.
                            <br /> <br />

                            The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.
                        </p>
                    </div>
                </div>
                {/* What does it mean by useMemo? */}
                <div className="collapse md:w-6/12 container mx-auto bg-white rounded-lg shadow">
                    <input type="checkbox" />
                    <div className="collapse-title text-3xl font-medium">
                        What does it mean by useMemo?
                    </div>
                    <div className="collapse-content bg-slate-100">
                        <p className='text-2xl leading-9'>With the release of React 16.8, there are many useful hooks we can now use in your React applications where there is a mentionable Hooks that was introduced in 16.8 is <span className='font-bold'>useMemo</span> . This hook has the potential to improve performance in your application.The useMemo hook is needed for memoizing or caching computed results for reoccurring usage. It would help if we did not use the useMemo hook on side-effect tasks such as changing a state variable or a Virtual DOM element.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;