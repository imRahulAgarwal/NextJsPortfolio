import React from "react";
import styles from "./Skills.module.css";

const skillsArray = [
	{ title: "HTML", percentage: "92%", icon: "/github.svg" },
	{ title: "CSS", percentage: "90%", icon: "/github.svg" },
	{ title: "JavaScript", percentage: "88%", icon: "/github.svg" },
	{ title: "React", percentage: "85%", icon: "/github.svg" },
	{ title: "Node.js", percentage: "83%", icon: "/github.svg" },
	{ title: "MongoDB", percentage: "80%", icon: "/github.svg" },
	{ title: "Next.js", percentage: "84%", icon: "/github.svg" },
	{ title: "TypeScript", percentage: "78%", icon: "/github.svg" },
];

const Skills = () => {
	return (
		<section className={styles.skillsSection} id="skills-section">
			<div className="custom-container">
				<div className="flex flex-wrap">
					<div className="w-full">
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionHeaderTitle}>My Skills</h2>
							<p className={styles.sectionHeaderP}>
								We put your ideas and thus your wishes in the form of a unique web project that inspires
								you and your customers.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.skillsWidget}>
					{skillsArray.map((skill, index) => (
						<div key={index} className={styles.skillItem}>
							<div className={styles.skillItemInner}>
								<div className={styles.skillItemIconBox}>
									<img src={skill.icon} alt={skill.title} className={styles.skillItemIconBoxImage} />
								</div>
								<div className={styles.skillItemNumber}>{skill.percentage}</div>
							</div>
							<p className={styles.skillItemP}>{skill.title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
