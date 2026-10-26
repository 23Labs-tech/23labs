import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BreadcrumbJsonLd } from "@/components/site/BreadcrumbJsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  absoluteTitle: "Privacy Policy | 23Labs",
  path: "/privacy-policy",
  description:
    "How 23Labs handles personal information when you visit www.23labs.co, contact us, or work with us.",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        body="How 23Labs handles personal information when you visit www.23labs.co, contact us, or work with us. Written in plain English."
      />

      <section className="sec no-top">
        <div className="container narrow">
          <div className="article-body">
            {/* TODO(privacy-confirm): last-updated date. Omitted until Chrys sets a publication date. Do not show a guessed date. */}
            <p>
              This policy explains how 23Labs handles personal information when you visit www.23labs.co, contact
              us, or work with us.
            </p>

            <h2>1. Who we are</h2>
            {/* TODO(privacy-confirm): legal entity name and ABN. The page uses the name already on the site and does not show an ABN. */}
            <p>
              23Labs (&quot;23Labs&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a software and
              automation studio based in Melbourne, Australia. We work with businesses across Australia and New
              Zealand, mostly remotely. The name used on this website is {siteConfig.legalName}.
            </p>
            <p>
              We aim to handle personal information in line with the Australian Privacy Principles in the{" "}
              <em>Privacy Act 1988</em> (Cth). If you are in New Zealand, we also aim to respect the information
              privacy principles in the New Zealand <em>Privacy Act 2020</em>.
            </p>
            <p>
              You can contact us about privacy at any time at{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>2. What we collect</h2>
            <p>We only collect what we need to respond to you, run our website and deliver our services.</p>
            <p>
              <strong>When you use our contact form</strong>, we collect:
            </p>
            <ul>
              <li>your name (required)</li>
              <li>your work email address (required)</li>
              <li>your company name (optional)</li>
              <li>your phone number (optional)</li>
              <li>
                what you are trying to improve (required). The message needs to be more than a few words before
                the form will send.
              </li>
            </ul>
            <p>
              The form also includes a hidden field that is not shown on the page. It is there to catch automated
              spam. If that field is filled in, we discard the submission and do not email it. We do not keep it
              as information about you.
            </p>
            <p>
              When you first interact with the form, we note the time. We use that only to reject submissions
              that arrive too quickly. The time is not included in the enquiry email, and we do not store it
              after the request.
            </p>
            <p>
              To limit repeated submissions, the site briefly uses your IP address. That count is held in the
              server&apos;s memory for the limit only. It is not included in the enquiry email and it is not used
              for analytics.
            </p>
            <p>
              <strong>When you email us directly</strong>, we collect the contact details you send and whatever
              you choose to tell us.
            </p>
            <p>
              <strong>When you are a prospect or client</strong>, you may share information about your business,
              your team, your processes and the systems you use. This can include names, work contact details and
              job titles of your staff, and sometimes access to business systems or sample data so we can scope
              or deliver a project. We only ask for what the work needs.
            </p>
            <p>
              <strong>When you browse our website</strong>, we collect usage information through Google
              Analytics, using Google&apos;s default setup. That can include:
            </p>
            <ul>
              <li>
                pages you visit, how long you stay, and how you got to our site (for example, from a search
                engine)
              </li>
              <li>
                general device and browser information, approximate location at city or region level, and your
                IP address, which Google processes to provide the service
              </li>
              <li>
                certain actions, such as a contact form that sends successfully, or a click on our email address.
                Those events do not include your name, email address or message.
              </li>
            </ul>
            <p>
              We do not use this to identify you personally, and we do not combine it with the details you type
              into the contact form.
            </p>
            <p>
              Our own code does not keep a record of every page you view. The platform that hosts the site may
              keep ordinary technical request logs, such as an IP address and the page requested, so the site can
              stay available.
            </p>
            <p>
              You do not have to contact us. You can browse the site without giving us personal information. The
              contact form will not send unless it has your name, a work email address and a message. If you
              email us instead, you choose what to include. If we do not have a way to reply, we may not be able
              to help.
            </p>
            <p>
              We do not knowingly collect sensitive information, such as health information, through our website.
              Please do not include it in the contact form. If you send us information we did not ask for and do
              not need, we will delete it or de-identify it where it is lawful and reasonable to do so.
            </p>

            <h2>3. How we use your information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>reply to your enquiry and talk about your project</li>
              <li>prepare proposals, quotes and scoping work</li>
              <li>deliver, support and invoice for our services</li>
              <li>run, secure and improve our website, including understanding which pages are useful</li>
              <li>meet our legal, tax and accounting obligations.</li>
            </ul>
            {/* TODO(privacy-confirm): marketing emails. Conservative wording below, because this site has no newsletter signup. Confirm no marketing is sent from other systems. */}
            <p>We do not add contact form enquiries to a marketing list.</p>
            <p>
              We do not sell your personal information, and we do not share it with others for their own
              marketing.
            </p>

            <h2>4. Who we share it with</h2>
            <p>
              We use a small number of service providers to run the website. They handle information for that
              purpose.
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> (Vercel Inc.) hosts the website, including the contact form.
              </li>
              <li>
                <strong>Resend</strong> (Resend, Inc.) emails the contact form submission to our inbox. That
                email contains the form fields above. It does not include your IP address.
              </li>
              <li>
                <strong>Google Analytics</strong> (Google LLC) provides website usage statistics.
              </li>
            </ul>
            {/* TODO(privacy-confirm): email provider for hello@23labs.co. Omitted. The code shows Resend delivering the form, not which inbox hosts the address. */}
            {/* TODO(privacy-confirm): CRM, project, proposal, accounting and file tools. Omitted. No product names are published. */}
            <p>We may also share personal information:</p>
            <ul>
              <li>with professional advisers, such as our accountant or lawyers, where needed</li>
              {/* TODO(privacy-confirm): subcontractors and white-label partners. The sharing bullet is omitted until Chrys confirms it. */}
              <li>
                when the law requires or allows it, for example to respond to a valid legal request, or to
                protect someone&apos;s safety or our legal rights
              </li>
              <li>
                if the business is sold or restructured, with the new owner, who would need to keep handling it
                in line with this policy.
              </li>
            </ul>

            <h2>5. Overseas disclosure</h2>
            {/* TODO(privacy-confirm): other countries for internal tools. The page names only the United States for Vercel, Resend and Google. */}
            <p>
              Some of these providers store or process information outside Australia. Vercel, Resend and Google
              are based in the United States, and they may process data in the United States and in other
              countries where they or their infrastructure providers operate.
            </p>
            <p>
              We choose established providers and rely on their published security and privacy commitments.
              Overseas privacy laws may not be the same as Australian law. By using our website or sending us an
              enquiry, you acknowledge that your information may be handled overseas in this way.
            </p>
            <p>
              If you are in New Zealand, your information is handled by 23Labs from Australia and by the
              providers named above, who may store it outside Australia and New Zealand.
            </p>

            <h2>6. Cookies and analytics</h2>
            <p>Cookies are small files that a website stores in your browser.</p>
            <p>
              This website does not set its own advertising cookies, and we do not use social media tracking
              pixels. Links to our LinkedIn and Instagram pages are ordinary links. Those sites apply their own
              privacy policies once you visit them. Clicking those links is not recorded as an analytics event.
              Our fonts are delivered with the website, so loading a page does not contact a separate font
              service.
            </p>
            <p>
              We use <strong>Google Analytics 4</strong> to understand how people use the site. With the default
              setup, Google Analytics sets first-party cookies, usually named <code>_ga</code> and{" "}
              <code>_ga_&lt;ID&gt;</code>, which last up to two years. They help tell new visits from returning
              ones. Google&apos;s privacy policy explains how it handles this data:{" "}
              <a href="https://policies.google.com/privacy" rel="noreferrer">
                policies.google.com/privacy
              </a>
              . You can also read how Google uses information from sites that use its services:{" "}
              <a href="https://policies.google.com/technologies/partner-sites" rel="noreferrer">
                policies.google.com/technologies/partner-sites
              </a>
              .
            </p>
            <p>You can stop Google Analytics in several ways:</p>
            <ul>
              <li>
                install Google&apos;s opt-out browser add-on:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" rel="noreferrer">
                  tools.google.com/dlpage/gaoptout
                </a>
              </li>
              <li>block or delete cookies in your browser settings</li>
              <li>use a browser or extension that blocks analytics scripts.</li>
            </ul>
            <p>The website still works if you do any of these.</p>

            <h2>7. How we keep information secure</h2>
            <p>
              We take reasonable steps to protect personal information from misuse, interference, loss and
              unauthorised access, change or disclosure. These include:
            </p>
            <ul>
              <li>encrypted (HTTPS) connections for the website</li>
              <li>spam and abuse protection on the contact form</li>
              {/* TODO(privacy-confirm): multi-factor authentication. Not claimed. The page only says access is limited to people who need it. */}
              <li>access to our systems limited to the people who need it</li>
              <li>using established providers with their own security arrangements.</li>
            </ul>
            <p>
              No system is completely secure. If a data breach is likely to cause serious harm, we will act
              quickly to contain it and will notify affected people and regulators where the law requires.
            </p>

            <h2>8. How long we keep it</h2>
            {/* TODO(privacy-confirm): enquiry retention period. No number is published. */}
            {/* TODO(privacy-confirm): client-record retention period. No number is published. */}
            {/* TODO(privacy-confirm): client system access and project data. No period or return rule is published. */}
            {/* TODO(privacy-confirm): GA4 data-retention setting. No period is published. */}
            <p>
              We keep personal information only for as long as we need it for the purposes in this policy, or as
              long as the law requires. For example, Australian tax law generally requires many business records
              to be kept for five years.
            </p>
            <p>
              We have not published a fixed period here for enquiries that do not go ahead, client records,
              access to client systems, or Google Analytics data. When we no longer need information, we delete
              it or de-identify it.
            </p>

            <h2>9. Client projects</h2>
            {/* TODO(privacy-confirm): client-agreement wording. The page does not say current agreements already cover data handling. */}
            <p>
              When we build software or automation for a client, we may handle information about that
              client&apos;s own customers or staff. In that case we handle it for the client. How that is
              managed for a particular project is a matter for the agreement with that client.
            </p>
            <p>
              If you are a client&apos;s customer and have a question about your information, please contact that
              business first. We are happy to help them respond.
            </p>

            <h2>10. Accessing and correcting your information</h2>
            <p>
              You can ask to see the personal information we hold about you, or ask us to correct it if it is
              wrong, out of date or incomplete. Email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We may need to confirm who you are
              first. We will reply within 30 days. There is no charge to make a request, and we will only charge
              for providing access if we have told you about the cost first and it is reasonable. If we cannot
              give you access or make a correction, we will explain why, unless it would be unlawful or
              unreasonable to do so.
            </p>

            <h2>11. Questions and complaints</h2>
            <p>
              If you have a concern about how we have handled your personal information, please email{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> with the details. We will acknowledge
              your complaint promptly and aim to respond within 30 days.
            </p>
            <p>If you are not satisfied with our response, you can contact:</p>
            <ul>
              <li>
                <strong>Australia:</strong> the Office of the Australian Information Commissioner (OAIC),{" "}
                <a href="https://www.oaic.gov.au" rel="noreferrer">
                  www.oaic.gov.au
                </a>
                , phone 1300 363 992
              </li>
              <li>
                <strong>New Zealand:</strong> the Office of the Privacy Commissioner,{" "}
                <a href="https://www.privacy.org.nz" rel="noreferrer">
                  www.privacy.org.nz
                </a>
                .
              </li>
            </ul>

            <h2>12. Changes to this policy</h2>
            <p>
              We may update this policy from time to time, for example if we start using a new service. We will
              publish the latest version on this page.
            </p>

            <h2>13. Contact us</h2>
            <p>
              <strong>23Labs</strong>
              <br />
              Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              Melbourne, Victoria, Australia
              <br />
              Website: <a href="https://www.23labs.co">www.23labs.co</a>
            </p>
          </div>
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
    </>
  );
}
