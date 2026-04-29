"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SERVICE_LINKS, SOCIALS } from "@/components/constants";

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
    <div className="h-px w-6 bg-primary" />
    <span
      className="text-[11px] font-black tracking-[0.22em] uppercase text-[#ccc]"
      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      {text}
    </span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#1a1a1a] text-[#ccc] overflow-hidden border-t border-[#2a2a2a]">
      {/* Engineering grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Diagonal stripe accent left edge */}
      <div
        className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, rgba(255,255,255,0.06) 14px, rgba(255,255,255,0.06) 15px)",
        }}
      />

      {/* Top green accent bar */}
      <div className="relative h-[3px] w-full bg-primary" />

      {/* ── MAIN CONTENT ── */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          {/* 1. Brand — centered on mobile, left-aligned on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-60 xl:w-[260px] shrink-0
                       flex flex-col items-center text-center
                       lg:items-start lg:text-left
                       gap-5 pb-8
                       border-b border-[#2e2e2e]
                       lg:border-b-0 lg:border-r lg:border-[#2e2e2e] lg:pr-8"
          >
            {/* Logo framed panel */}
            <div className="relative border border-[#333] bg-[#f5f4f0] p-4 w-fit">
              <div className="absolute -top-px -left-px w-3 h-3 bg-primary" />
              <div className="absolute -top-px -right-px w-3 h-3 bg-primary" />
              <div className="absolute -bottom-px -left-px w-3 h-3 bg-primary" />
              <div className="absolute -bottom-px -right-px w-3 h-3 bg-primary" />
              <Image
                src="/logos/components/header/Geo-Petroleum.webp"
                alt="Geo Petroleum Logo"
                width={180}
                height={180}
                className="w-auto h-14"
              />
            </div>

            <p
              className="text-sm text-[#888] leading-relaxed max-w-[280px]"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Delivering excellence in environmental compliance, fuel
              management, and sustainable petroleum solutions across Texas and
              the Southeast.
            </p>

            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-primary" />
              <span
                className="text-[10px] font-bold tracking-[0.22em] uppercase text-primary"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Est. 1988 · Houston, TX
              </span>
            </div>

            <div className="flex gap-2">
              {SOCIALS.map((url, i) => (
                <SocialIcon
                  key={i}
                  url={url}
                  target="_blank"
                  style={{ height: 32, width: 32, borderRadius: 0 }}
                  bgColor="var(--color-primary)"
                  className="hover:opacity-80 transition-opacity duration-200"
                />
              ))}
            </div>
          </motion.div>

          {/* 2–4. Links grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex flex-col items-center lg:items-start"
            >
              <SectionLabel text="Quick Links" />
              <ul className="flex flex-col items-center lg:items-start gap-2.5">
                {NAV_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className="flex items-center gap-2 text-[13px] text-[#888] hover:text-primary transition-colors duration-200 group"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-start"
            >
              <SectionLabel text="Services" />
              <ul className="flex flex-col items-center lg:items-start gap-2.5">
                {SERVICE_LINKS.map(({ label, path }) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className="flex items-center gap-2 text-[13px] text-[#888] hover:text-primary transition-colors duration-200 group text-center lg:text-left"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="flex flex-col items-center lg:items-start"
            >
              <SectionLabel text="Contact Us" />
              <div className="flex flex-col items-center lg:items-start gap-4">
                <a
                  href="tel:844-GEO-4040"
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-0.5 w-7 h-7 flex items-center justify-center bg-primary text-white shrink-0">
                    <Phone className="w-3 h-3" />
                  </span>
                  <span
                    className="text-[13px] text-[#888] group-hover:text-primary transition-colors duration-200 mt-1"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    844-GEO-4040
                  </span>
                </a>

                <a
                  href="mailto:info@geopetroleum.com"
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-0.5 w-7 h-7 flex items-center justify-center bg-primary text-white shrink-0">
                    <Mail className="w-3 h-3" />
                  </span>
                  <span
                    className="text-[13px] text-[#888] group-hover:text-primary transition-colors duration-200 break-all mt-1"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    info@geopetroleum.com
                  </span>
                </a>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 flex items-center justify-center bg-[#2a2a2a] text-[#888] shrink-0">
                    <MapPin className="w-3 h-3" />
                  </span>
                  <div
                    className="text-[13px] text-[#888] leading-relaxed mt-1"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    <span className="font-semibold text-[#ccc] block">
                      Main Office
                    </span>
                    40 Lyerly Street
                    <br />
                    Houston TX 77022
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative border-t border-[#2a2a2a]">
        <div className="absolute top-0 left-6 lg:left-16 opacity-25">
          <div className="w-5 h-5 border-t-2 border-l-2 border-white" />
        </div>
        <div className="absolute top-0 right-6 lg:right-16 opacity-25">
          <div className="w-5 h-5 border-t-2 border-r-2 border-white" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
          <span
            className="text-[11px] text-[#555] tracking-wide"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            © {new Date().getFullYear()} Geo Petroleum. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-[#333]" />
            <span
              className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#444]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Houston · Texas · Southeast
            </span>
          </div>
          <a
            href="https://northernware.ph"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built by Northernware"
            className="group ft-mono relative inline-flex items-center gap-2.5"
          >
            {/* Acid pulse dot */}
            <span
              aria-hidden
              className="relative flex h-2.5 w-2.5 flex-shrink-0"
            >
              <span className="absolute inline-flex h-full w-full animate-ping bg-[#FF3800] opacity-40" />
              <span className="relative inline-flex h-2.5 w-2.5 bg-[#FF3800] transition-transform duration-300 group-hover:scale-125" />
            </span>
            <span className="flex flex-col leading-[1.35]">
              <span className="text-xs tracking-wide text-white/35 transition-colors duration-300 group-hover:text-white/60">
                powered by{" "}
                <span className="relative font-semibold text-white/85 transition-colors duration-300 group-hover:text-white">
                  northernware
                  <span
                    aria-hidden
                    className="absolute -bottom-px left-0 h-px w-0 bg-[#FF3800] transition-all duration-500 ease-out group-hover:w-full"
                  />
                </span>
              </span>
              <span className="text-[11px] italic tracking-wide text-white/25 transition-colors duration-300 group-hover:text-white/45">
                build superior software.
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
