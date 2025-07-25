import React from "react";
import styles from "./Skills.module.css";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

interface SkillItem {
	title: string;
	icon: string;
}

const skillsArray: SkillItem[] = [
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

// Split skills into two rows
const firstRowSkills = skillsArray.slice(0, 8);
const secondRowSkills = skillsArray.slice(8);

const Skills = () => {
	const renderSkillsRow = (skills: SkillItem[], direction = "left") => {
		// Duplicate skills for seamless loop
		const duplicatedSkills = [...skills, ...skills, ...skills];

		return (
			<div className={`${styles.skillsRow} ${styles[`slide${direction === "left" ? "Left" : "Right"}`]}`}>
				{duplicatedSkills.map((skill, index) => (
					<div key={`${skill.title}-${index}`} className={styles.skillItem}>
						<div className={styles.skillItemInner}>
							<div className={styles.skillItemIconBox}>
								<img
									src={`/Skills/${skill.icon}`}
									alt={skill.title}
									className={styles.skillItemIconBoxImage}
								/>
							</div>
						</div>
						<p className={styles.skillItemP}>{skill.title}</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<section className={styles.skillsSection} id="skills">
			<div className="custom-container">
				<div className="flex flex-wrap">
					<div className="w-full">
						<div className="section-header">
							<FadeInOnView>
								<h2 className="section-header-title">My Skills</h2>
							</FadeInOnView>
							<FadeInOnView>
								<p className="mt-[15px] mb-0">
									We put your ideas and thus your wishes in the form of a unique web project that
									inspires you and your customers.
								</p>
							</FadeInOnView>
						</div>
					</div>
				</div>

				<div className={styles.skillsSlider}>
					{/* First row - slides left to right */}
					<div className={styles.skillsRowContainer}>{renderSkillsRow(firstRowSkills, "left")}</div>

					{/* Second row - slides right to left */}
					<div className={styles.skillsRowContainer}>{renderSkillsRow(secondRowSkills, "right")}</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
