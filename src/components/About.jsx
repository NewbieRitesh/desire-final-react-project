import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/solid'

const About = () => {
    return (
        <div className="w-full px-4 pt-4" >
            <div className="mx-auto w-full max-w-md rounded-2xl backdrop-blur-sm bg-transperent p-2 border rounded-lg">

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>About React</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5 >Es6</h5>
                                <h5>React Rander</h5>
                                <h5>React JSX</h5>
                                <h5>React Components</h5>
                                <h5>React Class</h5>
                                <h5>React Props</h5>
                                <h5>React Events</h5>
                                <h5>React Condation</h5>
                                <h5>React Lists</h5>
                                <h5>React Form</h5>
                                <h5>React Router</h5>
                                <h5>React Memo</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>About JavaScript</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>Promises</h5>
                                <h5>Async/Await</h5>
                                <h5>Fetch</h5>
                                <h5>Classes & Object</h5>
                                <h5>How 'this' Works</h5>
                                <h5>Import/Export</h5>
                                <h5>Events & Events Listners</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>About C Language</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>Basics</h5>
                                <h5>Variable Declaration,Definition And Scops </h5>
                                <h5>Datatypes</h5>
                                <h5>Storage Classes</h5>
                                <h5>Operators</h5>
                                <h5>Preprocessor</h5>
                                <h5>Array&string</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>About C Language</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>Basics</h5>
                                <h5>Variable Declaration,Definition And Scops </h5>
                                <h5>Datatypes</h5>
                                <h5>Storage Classes</h5>
                                <h5>Operators</h5>
                                <h5>Preprocessor</h5>
                                <h5>Array&string</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>React Hooks</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>useState</h5>
                                <h5>useEffact</h5>
                                <h5>useNevigation</h5>
                                <h5>useLocation</h5>
                                <h5>useContext</h5>
                                <h5>useReducer</h5>
                                <h5>useCallback</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>Datatypes in JavaScript</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>Boolen Type</h5>
                                <h5>Null Type</h5>
                                <h5>Undefined type</h5>
                                <h5>Number type</h5>
                                <h5>String Type</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>C Function</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>C Function</h5>
                                <h5>C Function Parameters</h5>
                                <h5>C Recursion</h5>
                                <h5>C Function Declaration</h5>
                                <h5>c Math Functions</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-transperent border-b px-4 py-2 text-left text-sm font-medium text-gray-100 focus:outline-none focus-visible:ring-opacity-75">
                                <span>Libraries Of JavaScript</span>
                                <i
                                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 bi bi-chevron-double-down text-gray-100`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-200">
                                <h5>jQuery Library</h5>
                                <h5>Reacct Library</h5>
                                <h5>D3.js Library</h5>
                                <h5>Underscore  Library</h5>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}

export default About;