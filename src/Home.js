import React from 'react'
import "./Home.css"
import CustomNavbar from './component/Navbar/Navbar'
import Coursecard from './component/Coursecard/Coursecard';
import Footer from './component/Footer/Footer';
import { Code, Smartphone, Brain, Shield, Database, Cloud } from 'lucide-react'

function Home() {
    // ... (previous code remains the same)
    const cardData = [
        {

            image: 'https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/622a85ea75414daadf6055613c074c5280b95444',
            subheading: 'Expert Mentor',
            description: 'Our expert mentors are the cornerstone of our educational approach. With a wealth of knowledge they support our students on their journey to success.'
        },
        {
            image: 'https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/1478ee1b2a35123ded761b65c3ed2ceaece0d20f',
            subheading: 'High Quality Live Class',
            description: 'We deliver high-quality live classes to our students, providing interactive learning experiences led by experienced instructors.'
        },
        {
            image: 'https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/c412120e39b2095486c76978d4cd0bea88fd883b',
            subheading: '24/7 Live support',
            description: 'We offer our students 24/7 live support. Whether its a question or a challenge at midnight, our dedicated team is here to provide guidance, assistance.'
        }
    ];
    const devTools = [
        {
            icon: <Code size={40} />,
            name: 'Web Development',
            description: 'Tools for creating responsive and dynamic websites',
            examples: ['React', 'Vue.js', 'Angular']
        },
        {
            icon: <Smartphone size={40} />,
            name: 'Mobile App Development',
            description: 'Platforms for building iOS and Android applications',
            examples: ['React Native', 'Flutter', 'Swift']
        },
        {
            icon: <Brain size={40} />,
            name: 'AI and Machine Learning',
            description: 'Frameworks and libraries for implementing AI solutions',
            examples: ['TensorFlow', 'PyTorch', 'Scikit-learn']
        },
        {
            icon: <Shield size={40} />,
            name: 'Cybersecurity',
            description: 'Tools for ensuring digital security and data protection',
            examples: ['Wireshark', 'Metasploit', 'Nmap']
        },
        {
            icon: <Database size={40} />,
            name: 'Database Management',
            description: 'Systems for storing, retrieving, and managing data',
            examples: ['MySQL', 'MongoDB', 'PostgreSQL']
        },
        {
            icon: <Cloud size={40} />,
            name: 'Cloud Computing',
            description: 'Platforms for scalable and flexible cloud solutions',
            examples: ['AWS', 'Azure', 'Google Cloud']
        }
    ];

    const courseData = [
        {
            id: "1",
            img: "https://teachmiddleeastmag.com/wp-content/uploads/2017/01/math.jpg",
            title: "M-1 & M-2",
            dec: " Some other features include Do and Learn activities for hands-on learning, Review Worksheets for revision and Math Gym exercises for developing skills in mental math.",
            price: "499"
        },
        {
            id: "2",
            img: 'https://i.ytimg.com/vi/m0LdKZ-prto/maxresdefault.jpg',
            title: "Python Programming",
            dec: "We all know that Python, the most popular programming language is used by a huge community of developers. Because of Python’s promising career and huge salary package",
            price: "599"
        },
        {
            id: "3",
            img: "https://tse3.mm.bing.net/th?id=OIP.xw9L5bycevSj6Ptw1R6oRwHaEK&pid=Api&P=0&h=180",
            title: "BEE",
            dec: "In this course, student will come to know about the Basics of Electrical Engineering, Currents and Voltages across various Electrical elements.Their behavior in both Ac & Dc",
          price: "999"
        },
        {
            id: "2",
            img: 'https://lmsagri.rjt.ac.lk/pluginfile.php/10106/course/overviewfiles/Physics.png',
            title: "Eng. Physics",
            dec: "B Tech Engineering Physics Syllabus is structured specifically to make students understand all concept physics their practical applications which include experimental techniques and modern equipment.",
            price: "599"
        },
        {
            id: "3",
            img: "https://1.bp.blogspot.com/-NZJF00ciTDM/WEVK3ziISjI/AAAAAAAAEAw/Z-ol__Y16AgQnpgufdFyxxDoxkhhhdZLwCLcB/w1200-h630-p-k-no-nu/Chemistry_Intro.jpg",
            title: "Eng. Chemistry",
            dec: "This book is structured keeping in view the objective of the Engineering Chemistry course. It deals with some advanced topics relevant to engineering,",
          price: "999"
        },
        {
            id: "2",
            img: 'https://edisonlms-fs.s3.us-east-2.amazonaws.com/tenant_lynxe/1da48764-6cc3-4167-884b-61a0027d795d_1669889734916_Engineering-Mechanics---Main.jpg',
            title: "Mechanics",
            dec: "The Engineering Mechanics course for Mechanical Engineering offered by EduRev provides a comprehensive understanding of the fundamental principles and concepts essential for mechanical engineers.",
            price: "599"
        },
        {
            id: "3",
            img: "https://pioneer4ss.com/wp-content/uploads/2022/08/value-added-skills-for-electrical-electronics-engineers-img.jpg",
            title: "BXE",
            dec: "electronic gadgets are all-pervasive and impact nearly every aspect of human life. This has resulted in a sharp growth in this sector and rising demand for electronic professionals.",
          price: "999"
        }
    ];

    return (
        <div>
            <CustomNavbar />
            <div className='mid-container'>
                <div className='content-wrapper'>
                    <div className='text-mid'>
                        <p>Empowering Minds, Inspiring Futures:</p>
                        <p>Your Gateway to Online Learning with</p>
                        <p className='name-mid-web'>Road2Tech</p>
                        <button className='btn-explore'>Explore Courses</button>
                    </div>
                    <div className='image-container'>
                        <img className='mid-img' src={'https://elearnfrontend.onrender.com/src/Pages/Images/Classroom.svg'} alt="Classroom" />
                    </div>
                </div>
            </div>
            <div className='card-container'>
                <p className='text-cen'>Why you choose <span className='sun-des'>Road2Tech</span></p>
                <div className="card-c">
                    {cardData.map((card, index) => (
                        <div key={index} className="card-mid">
                            <img src={card.image} alt={`Card ${index + 1}`} className="card-imh" />
                            <h3 className="card-heading">{card.subheading}</h3>
                            <p className="card-dec">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div id="courses" className='course-container'>
                <h2 className='text-centers'>Popular Courses</h2>
                <div className='card-flex'>
                    {courseData.map((course, index) => (
                        <Coursecard
                            key={index}
                            img={course.img}
                            title={course.title}
                            dec={course.dec}
                            price={course.price}
                            id={course.id}
                        />
                    ))}
                </div>
            </div>

            <div id="development" className='dev-container'>
                <h2 className='text-centers'>Development Tools Ecosystem</h2>
                <p className='dev-intro'>Explore the diverse range of tools and technologies powering modern software development:</p>
                <div className='dev-tools-grid'>
                    {devTools.map((tool, index) => (
                        <div key={index} className='dev-tool-card'>
                            <div className='dev-tool-icon'>{tool.icon}</div>
                            <h3 className='dev-tool-name'>{tool.name}</h3>
                            <p className='dev-tool-description'>{tool.description}</p>
                            <div className='dev-tool-examples'>
                                <p>Popular tools:</p>
                                <ul>
                                    {tool.examples.map((example, i) => (
                                        <li key={i}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="contact">
                <Footer/>
            </div>
        </div>
    )
}

export default Home