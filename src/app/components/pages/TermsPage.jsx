import { motion } from "motion/react";
import { FileText, ChevronRight } from "lucide-react";

const SECTIONS = [
  {
    title: "General Terms",
    content: `i. The headings of each section in these Terms of Use are only for the purpose of organizing the various provisions under these Terms of Use in an orderly manner.

ii. The use of this website is solely governed by these Terms of Use, Privacy Policy and any modifications or amendments made thereto by us from time to time, at our sole discretion.

iii. You expressly agree and acknowledge that these Terms of Use and Privacy Policy are co-terminus in nature and that expiry/termination of either one will lead to the termination of the other.

iv. You unequivocally agree that these Terms of Use and the Privacy Policy constitute a legally binding agreement between us.

v. We reserve the sole and exclusive right to amend or modify these Terms of Use without any prior permission or intimation to you, and you expressly agree that any such amendments or modifications shall come into effect immediately.`,
  },
  {
    title: "Registration",
    content: `Registration on the website is mandatory for Users. The Users shall have to provide the following information at the time of registration:

- Name
- Phone Number
- Email ID
- Geo-location
- Date of Birth
- Photo

The Users can also link their social media accounts such as Google and Facebook at the time of signing up on the website.`,
  },
  {
    title: "Payment Gateway",
    content: `For making all payments for services on the website, you shall be required to make payment for which you will be redirected to a third-party payment gateway.

The payment gateway consists of Razorpay / Debit Card / Credit Card / Net Banking / UPI and other wallet options.

You shall be governed under the concerned payment gateway's Terms and Conditions and other Policies for the purpose of all payment-related aspects.`,
  },
  {
    title: "Eligibility",
    content: `a) You represent and warrant that you are competent and eligible to enter into legally binding agreements and of age and that you have the requisite authority to bind themselves to these Terms of Use.

b) If you are a minor using this website, you may do so with the consent of your legal guardian. All Acts of minors shall be deemed to be considered as the acts undertaken under the supervision of their legal guardian.

c) You shall not use the website if you are not competent to contract or are disqualified from doing so by any other applicable law, rule or regulation currently in force.`,
  },
  {
    title: "Content",
    content: `All text, advertisement, graphics, user interfaces, visual interfaces, photographs, trademarks, logos, brand names, descriptions, sounds, music and artwork (collectively, 'Content'), is generated/provided or based on information provided by the users or third parties.

All content displayed on the website is subject to copyright and shall not be reused by You without the prior written consent from us and the copyright owner.

You are solely responsible for the integrity, authenticity, quality and genuineness of the content provided on the website.

You have a personal, non-exclusive, non-transferable, revocable, limited privilege to access the content on the website. You shall not copy, adapt, and modify any content without written permission from us.`,
  },
  {
    title: "Indemnity",
    content: `You agree to indemnify, defend and hold us without harm, and our respective directors, officers, employees and agents, from and against any losses, liabilities, claims, damages, demands, costs and expenses arising out of:

a. Your use of the website.
b. Your violation of these Terms of Use.
c. Your violation of any rights of another.
d. Your alleged improper conduct according to these Terms of Use.
e. Your conduct in connection with the website.

In no event shall we be liable to compensate You or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever.`,
  },
  {
    title: "Limitation of Liability",
    content: `We are not responsible for any consequences arising out of the following events:

i. If the website is inoperative/non-responsive due to any connectivity errors.
ii. If you have fed incorrect information or data or for any deletion of data.
iii. If there is an undue delay or inability to communicate through email.
iv. If there is any deficiency or defect in the services managed by us.
v. If there is a failure in the functioning of any other service provided by us.

The website accepts no liability for any errors or omissions, or for any damage caused to you, your belongings, or any third party, resulting from the use or misuse of the website.`,
  },
  {
    title: "Term",
    content: `a. These Terms of Use shall continue to form a valid and binding contract between us and shall continue to be in full force and effect until you continue to access and use the websites.

b. You may terminate your use of the website at any time.

c. We may terminate these Terms of Use and close your account at any time without notice and/or suspend or terminate your access to the website at any time and for any reason, if any discrepancy or legal issue arises.

d. It is also hereby declared that we may discontinue the Services and websites without any prior notice.`,
  },
  {
    title: "Termination",
    content: `a. We reserve the right, in its sole discretion, to unilaterally terminate Your access to the website, or any portion thereof, at any time, without notice or cause.

b. We also reserve the universal right to deny access to You, to any/all of our website without any prior notice/explanation to protect the interests of the website and/or other Users.

c. We reserve the right to limit, deny or create different access to the website and its features concerning different Users, or to change any of the features or introduce new features without prior notice.`,
  },
  {
    title: "User Obligations",
    content: `You agree and acknowledge that you are a restricted user of this website and you:

- Agree to provide genuine credentials during the process whenever required on the website.
- Agree to ensure the Name, Email address, Address, Mobile number is valid at all times.
- Are solely responsible for maintaining the confidentiality of your account password.
- Agree not to engage in any activity that interferes with or disrupts access to the website.
- Agree not to impersonate any person or entity, or falsely state your affiliation.
- Agree not to probe, scan or test the vulnerability of the website or any network.
- Agree not to post any material that is defamatory, offensive, obscene or indecent.
- Agree to use the services provided by us for lawful purposes only.`,
  },
  {
    title: "Intellectual Property Rights",
    content: `Unless expressly agreed to in writing, nothing contained herein shall give you a right to use any of the trade names, trademarks, service marks, logos, domain names, information, questions, answers, solutions, reports and other distinctive brand features.

All logos, trademarks, brand names, service marks, domain names, including material, designs, and graphics created by and developed by either the website or such other third party are the property of the website or the respective copyright or trademark owner.

Any reproduction or infringement of the intellectual property of the aforementioned owners by You will result in legal action being initiated against You.`,
  },
  {
    title: "Disclaimer of Warranties and Liabilities",
    content: `a. You further agree and undertake that you are accessing the website at your sole risk.

b. You agree that any kind of information, resources, activities, recommendations obtained from the website will not create any warranty and we disclaim all liabilities resulting from these.

c. We do not guarantee that the features and content contained in the website will be uninterrupted or error-free, or that the website or its server will be free of viruses or other harmful components.`,
  },
  {
    title: "Force Majeure",
    content: `We will not be liable for damages for any delay or failure to perform our obligations hereunder if such delay or failure is due to cause beyond our control or without its fault or negligence.

Force Majeure events include but are not limited to acts of war, acts of God, earthquake, riot, fire, festive activities, sabotage, labour shortage or dispute, internet interruption, technical failure, breakage of sea cable, hacking, piracy, cheating, illegal or unauthorized acts.`,
  },
  {
    title: "Dispute Resolution and Jurisdiction",
    content: `In the event of any dispute arising out of or in connection with this agreement, the parties shall, at first instance, attempt to resolve the dispute by mediation administered by the Centre for Online Resolution of Disputes ("CORD") (www.resolveoncord.com).

In the event the parties are unable to resolve any such dispute through mediation within 45 days, the dispute shall be finally resolved by arbitration administered by CORD.

The language of arbitration shall be in English. The seat of arbitration shall be Kolkata, India.

You expressly agree that the Terms of Use, Privacy Policy and any other agreements entered into between the Parties are governed by the laws, rules, and regulations of India.`,
  },
  {
    title: "Miscellaneous Provisions",
    content: `a. Entire Agreement: These Terms of Use, read with the Privacy Policy, form the complete and final contract between us with respect to the subject matter hereof.

b. Waiver: The failure at any time to require performance of any provision of these Terms of Use shall in no manner affect our right at a later time to enforce the same.

c. Severability: If any provision/clause of these Terms of Use is held to be invalid, illegal or unenforceable by any court, the validity of the remaining provisions shall in no way be affected.

d. Contact Us: If you have any questions, email us at sucheta@abybaby.co.in or shaw.vijay@abybaby.co.in or write to us at: M/s Abybaby E-Com Private Limited, Ground Floor, 4B, Rani Bhabani Road, Kolkata, West Bengal – 700026.`,
  },
  {
    title: "Data Retention Policy",
    content: `Abybaby E-Com retains only that data that is necessary to effectively conduct its program activities, fulfil its mission and comply with applicable laws and regulations.

Reasons for data retention include:
- Providing an ongoing service to the data subject.
- Compliance with applicable laws and regulations.
- Compliance with applicable labour, tax and immigration laws.
- Electronic communications, invoices, billing, customer records.
- Security incident or other investigation.
- Intellectual property preservation.

Data Destruction: When the retention period for the data expires, Abybaby E-Com will actively destroy the data covered by this policy. Any exceptions to this data retention policy must be approved by Abybaby E-Com's data protection officer in consultation with legal counsel.`,
  },
];

function SectionCard({ section, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="bg-card border border-border rounded-2xl px-5 py-5"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1 h-4 rounded-full bg-primary flex-shrink-0" />
        <h2
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-sm font-bold text-foreground"
        >
          {section.title}
        </h2>
      </div>
      <p
        style={{ fontFamily: "var(--font-sans)" }}
        className="text-[13px] text-foreground/60 leading-relaxed whitespace-pre-line"
      >
        {section.content}
      </p>
    </motion.div>
  );
}

export function TermsPage({ navigate }) {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Mobile top bar ───────────────────────────────────── */}
      <div className="lg:hidden sticky top-0 z-30 bg-card/96 backdrop-blur-sm border-b border-border px-5 h-14 flex items-center justify-between">
        <div
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-lg font-bold text-primary"
        >
          AbyBaby
          <span className="text-foreground/65 ml-1 text-base">Group</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-foreground/40" />
          ))}
        </div>
      </div>

      <div className="max-w-[680px] mx-auto px-5 pt-28 pb-24">
        {/* ── Hero header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 mb-4">
            <button
              onClick={() => navigate("home")}
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-[11px] text-foreground/40 hover:text-primary transition-colors"
            >
              Home
            </button>
            <ChevronRight size={12} className="text-foreground/30" />
            <span
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-[11px] text-primary"
            >
              Terms & Conditions
            </span>
          </div>

          {/* Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText size={20} className="text-primary" />
            </div>
            <h1
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-3xl font-bold text-foreground"
            >
              Terms & <span className="text-primary">Conditions</span>
            </h1>
          </div>

          <p
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-[13px] text-foreground/50 leading-relaxed"
          >
            This agreement is published by{" "}
            <span className="text-foreground/70 font-medium">
              M/s Abybaby E-Com Private Limited
            </span>
            , operating under the brand name{" "}
            <span className="text-primary font-medium">Abybaby</span>, having
            its registered address at Ground Floor, 4B, Rani Bhabani Road,
            Kolkata, West Bengal — 700026.
          </p>

          {/* Badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-full px-3 py-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-[11px] text-primary font-medium"
            >
              Governed by the laws of India · Seat: Kolkata
            </span>
          </div>
        </motion.div>

        {/* ── Intro notice ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-primary/5 border border-primary/15 rounded-2xl px-5 py-4 mb-6"
        >
          <p
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-[12px] text-foreground/55 leading-relaxed"
          >
            This electronic record is generated by a computer system and does
            not require any physical or digital signatures. By continuing to
            access and use this website, you are agreeing to comply with and be
            bound by the following Terms of Use and Privacy Policy. For
            questions, contact us at{" "}
            <span className="text-primary">sucheta@abybaby.co.in</span> or{" "}
            <span className="text-primary">shaw.vijay@abybaby.co.in</span>.
          </p>
        </motion.div>

        {/* ── Sections ─────────────────────────────────────────── */}
        <div className="space-y-3">
          {SECTIONS.map((section, i) => (
            <SectionCard key={section.title} section={section} index={i} />
          ))}
        </div>

        {/* ── Footer note ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-[11px] text-foreground/30"
          >
            © Abybaby E-Com Private Limited. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
