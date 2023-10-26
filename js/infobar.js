const options = document.querySelectorAll(".option");
const textbox = document.querySelector(".textbox");
let activeOption = null;

const bioHTML = `
    <div>
        <h2>Biography</h2>
        <p>Hi, I'm Oli and I'm a recently graduated software developer from Guildford who enjoys creating projects in my spare time. I have
        experience in writing <b>full stack</b> projects, in an <b>individual</b> and a <b>group</b> setting, and I am comfortable with both <b>front</b> and <b>back end</b>
        development.I have encountered various fields of computer science within my research, and I am currently very interested in
        <b>artificial intelligence</b> and <b>cyber security</b>, the former of which I carried out my final year dissertation on.<br><br> 
        <h3><i>Skills and Programming languages:</i><h3>
        <ul>
            <li>
                <img src="images/langs/python.png" alt="python">
                <a>Python</a>
            </li>
            <li>
                <img src="images/langs/html.png" alt="html">
                <a>HTML</a>
            </li>
            <li>
                <img src="images/langs/sql.png" alt="sql">
                <a>MySQL</a>
            </li>
            <li>
                <img src="images/langs/java.png" alt="java">
                <a>Java</a>
            </li>
            <li>
                <img src="images/langs/css.png" alt="css">
                <a>CSS</a>
            </li>
            <li>
                <img src="images/langs/git.png" alt="git">
                <a>Git</a>
            </li>
            <li>
                <img src="images/langs/csharp.png" alt="csharp">
                <a>C#</a>
            </li>
            <li>
                <img src="images/langs/js.png" alt="javascript">
                <a>JavaScript</a>
            </li>
            <li>
                <img src="images/langs/aws.png" alt="aws">
                <a>AWS</a>
            </li>
        </ul>
        <style>
            ul {
                list-style-type: none;
                padding: 0;
                column-count: 3;
                column-gap: 10px;
            }

            li {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }

            li img {
                width: 30px;
                margin-right: 10px;
            }

            a {
                text-decoration: none;
                color: #e1e1e4;
                font-weight: bold;
            }
        </style>
`;

const educationHTML = `
    <div>
        <h2>Education History</h2>
        <h3 style="color:black"><b>University of Exeter</b></h3>
        <ul>
        <li><i>Degree:</i><b style="color:black"> BSc Computer Science</b><br></li>
        <li><i>Grade:</i><b style="color:black"> 2:1</b></li>
        </ul>
        <h3 style="color:black"><b>George Abbot School</b></h3>
        <b><i>A Level's</i></b>
        <ul>
            <li>Maths: <b style="color:black"> A</b></li>
            <li>Computer Science: <b style="color:black">B</b></li>
            <li>Further Maths: <b style="color:black"> B</b></li>
        </ul>
        <b><i>GCSE's</i></b>
        <ul>
            <li><b style="color:black"> Two 9's</b>: (Maths, Physics)</li>
            <li><b style="color:black"> Four 8's</b>: (Computer Science, German, English Literature, Religious Education)</li>
            <li><b style="color:black"> Four 7's</b>: (English Language, Chemistry, Biology, Photography) </li>
        </ul>
    </div>
`;

const workHTML = `
    <div>
        <h2>Work History</h2>
        <h3 style="color:white"><b style="color:black">Delivery Courier- <i>Deliveroo</i></b><i> (09/2021-07/2023)</i></h3>
        <p><i><b>Online food delivery platform connecting consumers and local restaurants to enable ordering and delivery.</b></i><br><br>
        Working as a delivery courier in evenings during university. During my time as a courier, I learned to adapt to difficult
        situations, as well as developing connections with regular clients. Working as a courier helped me to organise my time better,
        allowing me to schedule my shifts in accordance with my university timetable. </p>
        <h3 style="color:white"><b style="color:black">Services Assistant- <i>Sainsburys</i></b><i> (01/2018-06/2018)</i></h3>
        <p><i><b>Multi-channel retailer that offers groceries, general merchandise, and clothing products.</b></i><br><br>
        During my time at Sainsbury's, I acquired a lot of key skills. I helped to prepare and distribute food products, take inventory
        of current stock, provide over the counter service to customers and restock products. This helped develop teamwork and 
        communication skills, to efficiently and quickly complete pertinent tasks as soon as I could.
        </p>
    </div>
`;

const contactHTML = `
    <div>
        <h2>Contact Me</h2>   
        <ul>
            <li>
                <img src="images/contacts/linkedin.png" alt="linkedIn">
                <a href="https://www.linkedin.com/in/oli-cieplinski/" target="_blank">Oliver Cieplinski</a>
            </li>
            <li>
                <img src="images/contacts/github.png" alt="gitHub">
                <a href="https://github.com/oliciep" target="_blank">oliciep</a>
            </li>
            <li>
                <img src="images/contacts/email.png" alt="email">
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=olivercieplinski@gmail.com&su=Website%20Inquiry&tf=cm" target="_blank">olivercieplinski@gmail.com</a>
            </li>
            <li>
                <img src="images/contacts/pdf.png" alt="overleaf">
                <a href="files/dissertation.pdf" target="_blank">My Dissertation</a>
            </li>
            <li>
                <img src="images/contacts/resume.png" alt="resume">
                <a href="files/resume.pdf" target="_blank">My Resume</a>
            </li>
        </ul>
        <style>
            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }

            li img {
                width: 30px;
                margin-right: 10px;
            }

            a {
                text-decoration: none;
                color: #e1e1e4;
                transition: color 0.5s;
            }
            
            a:hover {
                color: white;
            }
        </style>
    </div>
`;

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        // Hide the textbox
        setTimeout(() => {
            textbox.style.opacity = 0;
        }, 0);
        if (activeOption) {
            activeOption.classList.remove("active");
        }
        // Set the unique text for the selected option
        const texts = [
            bioHTML,
            educationHTML,
            workHTML,
            contactHTML
        ];

        // Show the selected text
        setTimeout(() => {
            textbox.innerHTML = texts[index];
            textbox.style.opacity = 1;
        }, 250);
        option.classList.add("active");

        // Store the active option for future reference
        activeOption = option;
    });
});