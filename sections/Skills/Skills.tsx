import React from "react";
import styles from "./Skills.module.css";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

const skillsArray = [
	{ title: "JavaScript (ES6+)", icon: "javascript.svg" },
	{ title: "TypeScript", icon: "typescript.svg" },
	{ title: "Node JS", icon: "node_js.svg" },
	{ title: "React JS", icon: "react.svg" },
	{ title: "Express JS", icon: "express.svg" },
	{ title: "Mongo DB", icon: "mongo_db.svg" },
	{ title: "Next.js", icon: "next_js.svg" },
	{ title: "Tailwind CSS", icon: "tailwind_css.svg" },
	{ title: "Bootstrap", icon: "bootstrap.svg" },
	{ title: "AWS S3", icon: "aws_s3.svg" },
	{ title: "AWS EC2", icon: "aws_ec2.svg" },
	{ title: "AWS Lambda", icon: "aws_lambda.svg" },
	{ title: "Git", icon: "git.svg" },
	{ title: "GitHub", icon: "github.svg" },
	{ title: "DevOps (GitHub Actions)", icon: "github_actions.svg" },
	{ title: "WordPress", icon: "wordpress.svg" },
];

const Skills = () => {
	return (
		<section className={styles.skillsSection} id="skills">
			<div className="custom-container">
				<div className="flex flex-wrap">
					<div className="w-full">
						<div className={styles.sectionHeader}>
							<FadeInOnView>
								<h2 className={styles.sectionHeaderTitle}>My Skills</h2>
							</FadeInOnView>
							<FadeInOnView>
								<p className={styles.sectionHeaderP}>
									We put your ideas and thus your wishes in the form of a unique web project that
									inspires you and your customers.
								</p>
							</FadeInOnView>
						</div>
					</div>
				</div>

				<div className={styles.skillsWidget}>
					{skillsArray.map((skill, index) => (
						<FadeInOnView key={index} className={styles.skillItem}>
							<div className={styles.skillItemInner}>
								<div className={styles.skillItemIconBox}>
									<img
										src={`/skills/${skill.icon}`}
										alt={skill.title}
										className={styles.skillItemIconBoxImage}
									/>
								</div>
							</div>
							<p className={styles.skillItemP}>{skill.title}</p>
						</FadeInOnView>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
