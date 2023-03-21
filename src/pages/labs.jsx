import Image from 'next/Image';

export default function Labs() {
    return (
    <>
      <div className="section home-page">
        <div className="container">
          <div className="info-page">
            <p style={{ color: "red" }}>
              Lab materials are only available for enrolled students through the
              university Canvas system through this
              <a
                target="_blank"
                href="https://canvas.elte.hu/courses/34322/assignments/syllabus"
              >
                link
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="section home-page">
        <div className="container">
          <div className="info">
            <div className="image-logo">
              <Image
                src="/elte.jpg"
                alt="ELTE Logo"
                width="100"
                height="240"
              />
            </div>
            <div className="info-txt">
              <p>
                Welcome to the Python Lab! This lab is designed for students who
                want to learn how to write Python programs, from the very basics to
                advanced concepts like Object-Oriented Programming (OOP), managing
                packages using pip, and using advanced modules. In the first part of
                the lab, students will start with the basics and gradually move on
                to more complex topics.
              </p>
              <p>
                As a part of this lab, students will be using the NetAcad Academy
                course on Big Data Analytics. This course will help students gain a
                comprehensive understanding of the key concepts, tools, and
                techniques used in Big Data Analytics.
              </p>
            </div>
            <div className="info-txt">
              <p>
                Throughout the course, students will learn how to analyze large
                amounts of data, identify patterns, and make data-driven decisions.
                They will also learn how to use advanced analytics tools and
                technologies, such as Hadoop, Spark, and R, to analyze data
                efficiently.
              </p>
              <p>
                By the end of the course, students will have gained a deep
                understanding of Big Data Analytics and will be able to apply their
                skills to real-world business problems. Additionally, students who
                successfully complete the course will receive a certificate from
                NetAcademy, which they can use to showcase their skills and
                knowledge to potential employers. see more about the second part
                course &nbsp;(
                <a
                  target="_blank"
                  href="https://www.netacad.com/courses/iot/big-data-analytics"
                  className="external-link"
                >
                  https://www.netacad.com/courses/iot/big-data-analytics
                </a>
                )
              </p>
              <p>
                Overall, the combination of the Python Lab and the NetAcad Academy
                course on Big Data Analytics provides students with a comprehensive
                and practical education in one of the most sought-after skills in
                today&apos;s job market.Our experienced instructors will guide you
                through the entire process, making sure you have a strong foundation
                in Python programming. By the end of the lab, you&apos;ll have a deep
                understanding of Python and be well-equipped to tackle real-world
                programming problems. Join us today and take the first step towards
                becoming a skilled Python programmer!
              </p>
            </div>
            <div>
              <iframe src="https://www.youtube.com/embed/watch?v=37DHD-5fhiM&list=PLqhYARgo2XifP-1fF-ZBSh9vmQTd6VX_1"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}