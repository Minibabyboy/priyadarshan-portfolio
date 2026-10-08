"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroAvatar() {
  const avatarRef = useRef(null);

  useEffect(() => {
    const avatar = avatarRef.current;

    if (!avatar) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!finePointer) return;

    const handleMove = (event) => {
      const rect = avatar.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(avatar, {
        rotateY: x * 12,
        rotateX: y * -9,
        x: x * 8,
        y: y * 5,
        scale: 1.035,
        transformPerspective: 900,
        transformOrigin: "center center",
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleEnter = () => {
      gsap.to(avatar, {
        scale: 1.04,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(avatar, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.75,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    avatar.addEventListener("pointermove", handleMove);
    avatar.addEventListener("pointerenter", handleEnter);
    avatar.addEventListener("pointerleave", handleLeave);

    return () => {
      avatar.removeEventListener("pointermove", handleMove);
      avatar.removeEventListener("pointerenter", handleEnter);
      avatar.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div className="hero-avatar-stage">
      <div className="hero-avatar-glow" />

      <div className="hero-avatar-float">
        <div
          ref={avatarRef}
          className="hero-avatar-interactive"
        >
          <img
            src="/avatar/yogendram-3d.png"
            alt="Priyadarshan Yogendram"
            className="hero-avatar-image"
            draggable="false"
          />
        </div>
      </div>

      <div className="hero-avatar-role">
        <span>FULL-STACK DEVELOPER</span>
        <i>·</i>
        <span>WEB DESIGNER</span>
        <i>·</i>
        <span>UI/UX DESIGNER</span>
        <i>·</i>
        <span>SOCIAL MEDIA MARKETING</span>
      </div>
    </div>
  );
}