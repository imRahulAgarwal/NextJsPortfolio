"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MailIcon, MapPinIcon } from "lucide-react";
import styles from "./Contact.module.css";
import FadeInOnView from "@/components/FadeInOnView/FadeInOnView";

// 1️⃣ Define validation schema with Zod
const ContactSchema = z.object({
	firstName: z.string().min(2, "First name should be at least 2 characters").nonempty("First name is required"),
	lastName: z.string().min(2, "Last name should be at least 2 characters").optional().or(z.literal("")),
	email: z.string().email("Invalid email address").nonempty("Email is required"),
	phone: z
		.string()
		.regex(/^\+?[0-9\s\-()]{7,}$/, "Invalid phone number")
		.optional()
		.or(z.literal("")),
	message: z.string().min(10, "Message should be at least 10 characters").nonempty("Message is required"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export default function Contact() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(ContactSchema),
		defaultValues: { firstName: "", lastName: "", email: "", phone: "", message: "" },
	});

	const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
		const res = await fetch("/api/email", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (res.ok) {
			reset();
		} else {
			throw new Error(await res.text());
		}
	};

	return (
		<section className="py-[120px] bg-black-1 relative" id="contact">
			<div className="custom-container">
				<div className="grid lg:grid-cols-2 gap-10">
					<FadeInOnView>
						<div className="bg-accent-2 p-10 rounded-[15px]">
							<div className="section-header !text-left">
								<FadeInOnView>
									<h2 className="section-header-title">Let’s work together!</h2>
								</FadeInOnView>
								<FadeInOnView>
									<p>I design and code beautifully simple things and I love what I do.</p>
								</FadeInOnView>
							</div>

							<form noValidate onSubmit={handleSubmit(onSubmit)}>
								<div className="grid sm:grid-cols-2 gap-3">
									{/* First Name */}
									<FadeInOnView>
										<div className={styles.formGroup}>
											<label htmlFor="firstName" className="sr-only">
												First name
											</label>
											<input
												id="firstName"
												type="text"
												placeholder="First name"
												autoComplete="given-name"
												{...register("firstName")}
												aria-invalid={!!errors.firstName}
											/>
											{errors.firstName && (
												<p role="alert" className="text-red-500">
													{errors.firstName.message}
												</p>
											)}
										</div>
									</FadeInOnView>

									{/* Last Name (optional) */}
									<FadeInOnView>
										<div className={styles.formGroup}>
											<label htmlFor="lastName" className="sr-only">
												Last name (optional)
											</label>
											<input
												id="lastName"
												type="text"
												placeholder="Last name (optional)"
												autoComplete="family-name"
												{...register("lastName")}
											/>
											{errors.lastName && (
												<p role="alert" className="text-red-500">
													{errors.lastName.message}
												</p>
											)}
										</div>
									</FadeInOnView>

									{/* Email */}
									<FadeInOnView>
										<div className={styles.formGroup}>
											<label htmlFor="email" className="sr-only">
												Email
											</label>
											<input
												id="email"
												type="email"
												placeholder="Email address"
												autoComplete="email"
												{...register("email")}
												aria-invalid={!!errors.email}
											/>
											{errors.email && (
												<p role="alert" className="text-red-500">
													{errors.email.message}
												</p>
											)}
										</div>
									</FadeInOnView>

									{/* Phone */}
									<FadeInOnView>
										<div className={styles.formGroup}>
											<label htmlFor="phone" className="sr-only">
												Phone (optional)
											</label>
											<input
												id="phone"
												type="tel"
												placeholder="Phone number (optional)"
												autoComplete="tel"
												{...register("phone")}
												aria-invalid={!!errors.phone}
											/>
											{errors.phone && (
												<p role="alert" className="text-red-500">
													{errors.phone.message}
												</p>
											)}
										</div>
									</FadeInOnView>

									{/* Message + Submit */}
									<div className="sm:col-span-2 flex flex-col gap-3">
										<FadeInOnView>
											<div className={styles.formGroup}>
												<label htmlFor="message" className="sr-only">
													Message
												</label>
												<textarea
													id="message"
													placeholder="Message"
													rows={5}
													autoComplete="off"
													{...register("message")}
													aria-invalid={!!errors.message}
												/>
												{errors.message && (
													<p role="alert" className="text-red-500">
														{errors.message.message}
													</p>
												)}
											</div>
										</FadeInOnView>

										<FadeInOnView>
											<button type="submit" className={styles.formButton} disabled={isSubmitting}>
												{isSubmitting
													? "Sending..."
													: isSubmitSuccessful
													? "Sent!"
													: "Send Message"}
											</button>
										</FadeInOnView>
									</div>
								</div>
							</form>
						</div>
					</FadeInOnView>

					{/* Contact Info */}
					<FadeInOnView className="flex flex-col justify-center">
						<div className="flex flex-col justify-center">
							<ul className={styles.contactInfoList}>
								<li className={styles.contactInfoListItem}>
									<div className={styles.contactInfoListIconBox}>
										<MailIcon />
									</div>
									<div>
										<p className={styles.textBoxP}>Email</p>
										<a className={styles.textBoxLink} href="mailto:imagarwal05@mail.com">
											imagarwal05@mail.com
										</a>
									</div>
								</li>
								<li className={styles.contactInfoListItem}>
									<div className={styles.contactInfoListIconBox}>
										<MapPinIcon />
									</div>
									<div>
										<p className={styles.textBoxP}>Address</p>
										<span className={styles.textBoxLink}>Ahmedabad, Gujarat</span>
									</div>
								</li>
							</ul>
						</div>
					</FadeInOnView>
				</div>
			</div>
		</section>
	);
}
