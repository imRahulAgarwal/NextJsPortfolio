"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import React, { useEffect, useState } from "react";

const GoogleAnalyticsTag = () => {
	const [shouldInit, setShouldInit] = useState(false);

	useEffect(() => {
		if (typeof window !== undefined && window.location.hostname !== "localhost") {
			setShouldInit(true);
		}
	}, []);

	if (!shouldInit) {
		return null;
	}

	return <GoogleAnalytics gaId="G-LYVKMB6T19" />;
};

export default GoogleAnalyticsTag;
