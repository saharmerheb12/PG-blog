"use client";
import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Popup from "@/components/popup";

export default function Footer({ props }) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <ThemeSwitch />
      <Popup
        alert={props.subscriptionAlert}
        delay={props.subscriptionPopupDelay}
      />
    </Container>
  );
}
