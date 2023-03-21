import Navbar from '@/pages/navbar'

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="section home-page">
        <div className="container">
          <div className="info-page">
            <h2 className="page-subtitle">Welcome to our Python course page!</h2>
            <article>
              Our Python course, focusing on IoT and big data analytics using
              Python, is offered every semester and is worth <b> 5 credits </b>. We
              offer the course <b> in both English and Hungarian </b>, providing our
              students with a diverse and inclusive learning environment. Upon
              successful completion of the course, students will receive a{" "}
              <b>
                certificate of completion from Cisco, signed by the Cisco Academy of
                ELTE-IK{" "}
              </b>
              , recognizing their proficiency in IoT and big data analytics using
              Python. See more information about the certificate (
              <a
                target="_blank"
                href="https://www.netacad.com/courses/iot/big-data-analytics"
              >
                https://www.netacad.com/courses/iot/big-data-analytics
              </a>
              ). To enroll in the course, please note that{" "}
              <b>
                registration is required for both the lecture and lab components{" "}
              </b>
              . We look forward to welcoming you to our course and helping you
              achieve your academic and career goals.
            </article>
          </div>
        </div>
      </div>

    </>
  )
}