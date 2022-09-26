import type { NextPage } from 'next'
import Link from 'next/link'
import CodeEditorWindow from '../components/CodeEditor'
import Content from '../components/Content'
import CourseListComponent from '../components/CourseListComponent'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Content>
        <div className="w-full h-[250px] bg-gradient-to-r from-[#201761] to-[#0a062d] flex items-center justify-center">
          <div className="flex space-x-5 items-end">
            <h1 className="text-8xl font-bold text-white">Computer Science Exam</h1>
            <p className="text-4xl mb-1 font-semibold text-white">(Java)</p>
          </div>
          <div />
        </div>
        <div className="mt-10" />
        <div className="container codet mx-auto">
            <div className="flex flex-row flex-wrap py-4">
                <main role="main" className="h-screen sm:w-2/3 md:w-3/4 pr-20 pt-1 px-2">
                  <ul className="flex flex-col overflow-hidden space-y-5">
                    <li className="text-2xl font-medium regt">COURSE INFO</li>
                    <li>This Java course will introduce key concepts in programming to help you form a solid foundation around universal coding principles like variables and data structures.</li>
                    <li className="text-2xl font-medium regt">WHAT YOU'LL GAIN</li>
                    <li>You will have a better understanding of Object-Oriented programming halfway through the course, and we will slowly ease into more nuanced topics in Java which pertain to its unique static syntax, such as defining abstract classes, inheritance, and polymorphism.</li>
                    <li className="text-2xl font-medium regt">ADDITIONAL INFO</li>
                    <li>The amount of time this course takes is contingent upon your experience level and how much time you dedicate to the course. We recommend you time yourself during exercises and revisit each topic periodically to boost long term memory of the content. Additionally, you should pursue independent projects in Java and do external research on any misunderstandings in order to gauge a better general proficiency of the language.</li>
                  </ul>
                  
                </main>
                <aside className="w-full sm:w-1/3 md:w-1/4 px-2 border-l-[1px] border-l-[#403769]">
                    <div className="sticky top-0 p-4 w-full">
                      <div className="mb-50">
                        <h1 className="text-xl codet">An exam for learning an introduction and practical applications of Java, and also a practicing tool for AP Computer Science A</h1>
                      </div>
                      <div className="mt-50">
                        <Link href="/courses/java/exam">
                          <button className="flex justify-evenly items-center text-md bg-[#130F28]">
                            <p>Start Exam</p>
                            <img src="/arrow.svg" />
                          </button>
                        </Link>
                      </div>
                      
                    </div>
                </aside>
            </div>
          </div>
      </Content>
    </div>
  )
}

export default Home
