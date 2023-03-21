export default function Faqs() {
    return (
    <>
        <div className="section full-height">
            <div className="container">
            <h1 className="page-subtitle">Frequently Asked Questions</h1>
            <div
                className="faqs-container"
                itemScope=""
                itemType="https://schema.org/FAQPage"
            >
                <div
                className="faq-singular"
                itemScope=""
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                >
                <h2 className="faq-question" itemProp="name">
                    Hello Professor, could you, please, advise about the lectures of
                    Python. I&apos;m having a clash with another subject at the same time.
                    Will there be a possibility to watch the recordings of lectures by
                    any chance? Or attending all the lectures in-person is a must point
                    for the subject?
                </h2>
                <div
                    className="faq-answer"
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                    The lectures are not being recorded, so in case of a course
                    conflict, you need to ask the professor of the other course to
                    email us regarding your attendance.
                    </div>
                </div>
                </div>
                <div
                className="faq-singular"
                itemScope=""
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                >
                <h2 className="faq-question" itemProp="name">
                    I am registered for lab course already but I can not register for
                    lecture part. What can I do?
                </h2>
                <div
                    className="faq-answer"
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                    In order to participate in both the lecture and practice, you were
                    required to register. If the course is currently full, you will
                    need to wait to see if a spot opens up due to someone dropping the
                    course. If no spots become available, you will need to drop the
                    course. Please inform the coordinators of your situation since we
                    have no control over Neptun and cannot increase the headcount
                    limit.
                    </div>
                </div>
                </div>
                <div
                className="faq-singular"
                itemScope=""
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                >
                <h2 className="faq-question" itemProp="name">
                    Is it possible for you to maybe extend the headcount limit for group
                    3. I already registered for the lecture but I don&apos;t have a practice
                    group
                </h2>
                <div
                    className="faq-answer"
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                    Due to constraints such as classroom size and instructor
                    availability, we may not be able to increase the headcount limit
                    at this time. These limitations are taken into consideration when
                    determining the maximum number of students that can be enrolled in
                    a course, and are important factors in ensuring the quality of the
                    learning experience for all participants.
                    </div>
                </div>
                </div>
                <div
                className="faq-singular"
                itemScope=""
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                >
                <h2 className="faq-question" itemProp="name">
                    I&apos;m in Python practice group 3 but it is clashing with my classes.
                    So could you open one more place in practice group 1.&nbsp;
                </h2>
                <div
                    className="faq-answer"
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                    I understand that your current Python practice group is clashing
                    with your classes, and that you are interested in switching to
                    practice group 1. Unfortunately, we may not be able to accommodate
                    your request by opening up another spot in practice group 1.
                    However, there may be other students in practice group 1 who are
                    experiencing a similar issue and may be willing to switch with
                    you.
                    </div>
                </div>
                </div>
                <div
                className="faq-singular"
                itemScope=""
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                >
                <h2 className="faq-question" itemProp="name">
                    I&apos;ve just realised there has been a change in my courses. Would it
                    be possible for me to attend lab 3 instead of lab 7?
                </h2>
                <div
                    className="faq-answer"
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                    I understand that you have recently had a change in your course
                    schedule and would like to attend lab 3 instead of lab 7.
                    Unfortunately, this may not be possible without switching your
                    enrollment in Neptun. If you have previously switched enrollments
                    in Neptun, you may be able to make this change by finding a
                    student in lab 3 who is willing to switch with you.
                    </div>
                </div>
                </div>
                <div
                className="faq-singular"
                itemScope=""
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                >
                <h2 className="faq-question" itemProp="name">
                    Can you increase the limit of the course because it is full.&nbsp;
                </h2>
                <div
                    className="faq-answer"
                    itemScope=""
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                >
                    <div itemProp="text">
                    I&apos;m sorry, but it may not be possible to increase the limit of the
                    course at this time due to capacity constraints. The limit for the
                    course may have been set based on various factors such as
                    classroom size, availability of instructors, and resources.
                    Increasing the limit beyond what is feasible may compromise the
                    quality of the learning experience for all students.
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}