import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
} from '@icons-pack/react-simple-icons'
import SiArmaturelabs from '@/components/icons/armature-labs'
import ImageCard from '@/components/ui/image-card'
import Marquee from '@/components/ui/marquee'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import * as React from 'react'
import Star35 from '@/components/stars/s35'
import { Mail, MapPin, Linkedin } from 'lucide-react'
import Link from 'next/link'

const baeLogo = (
  <Image
    src="/marquee/baesystemsdigital_logo.jpg"
    alt="BAE Systems"
    width={80}
    height={32}
    className="h-8 w-auto object-contain"
  />
)

const pentaLogo = (
  <Image
    src="/marquee/penta_grp_logo.jpg"
    alt="Pentadactyl"
    width={80}
    height={32}
    className="h-8 w-auto object-contain ml-2"
  />
)

const armatureLogo = (
  <Image
    src="/merlin.png"
    alt="Armature Labs"
    width={80}
    height={32}
    className="h-8 w-auto object-contain ml-2"
  />
)

const items = [
  <Star35 key="star-0" size={30} className="inline-flex items-center gap-2"/>,
  
  <span key="consultant" className="inline-flex items-center gap-2">
    {baeLogo}
    <span>Data Consultant 25&apos;</span>
  </span>,
  <Star35 key="star-1" size={30} className="inline-flex items-center gap-2"/>,
  <span key="engineer" className="inline-flex items-center gap-2">
    {baeLogo}
    <span>Data Engineer 24&apos;</span>
  </span>,
  <Star35 key="star-2" size={30} className="inline-flex items-center gap-2"/>,
  <span key="scientist" className="inline-flex items-center gap-2">
    {pentaLogo}
    <span>Data Scientist 23&apos;</span>
  </span>,
  <Star35 key="star-3" size={30} className="inline-flex items-center gap-2"/>,
  <span key="co-founder" className="inline-flex items-center gap-2">
    {armatureLogo}
    Co-Founder
  </span>
]

export default function Home() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:josht200@live.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/JOSHMT0744',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/joshuamichaelthompson/',
    },
    {
      icon: SiArmaturelabs,
      href: 'https://armaturelabs.ai',
    },
  ]

  return (
    <div className="min-w-0 w600:p-[30px] w600:text-lg w400:p-4 w400:text-base p-10 text-xl leading-[1.7]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8 w400:gap-3">
        <div className="min-w-0 flex-1">
          <p>
            Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'}!
            It's great to have you here {String.fromCodePoint(0x1F642)}
          </p>

          <br />

          <p>
            I want to show you around all my favourite hobbies, interests and projects.{' '}
            <a
              className="font-bold underline"
              target="_blank"
              href="https://github.com/neobrutalism-templates/windowed-portfolio"
            >
              github repo
            </a>{' '}
            for more info.
          </p>

          <div className="mr-auto mt-5 flex w-full flex-wrap items-center gap-6 w600:gap-5 w400:gap-4">
        {links.map((link, id) => {
          return (
            <a target="_blank" key={id} href={link.href}>
              <link.icon title="" />
            </a>
          )
        })}
      </div>
        </div>

        <ImageCard
          caption="Josh"
          imageUrl="/IMG_5865.JPG"
        />
      </div>

      

      <Tabs defaultValue="about" className="mt-8 w400:mt-6 min-w-0 w-full max-w-full">
        <TabsList className="grid w-full grid-cols-3 max-[600px]:grid-cols-1 gap-0.5 max-[600px]:gap-1.5 h-12 max-[600px]:h-auto">
          <TabsTrigger value="about" className="min-w-0 max-[600px]:whitespace-normal max-[600px]:text-center whitespace-nowrap text-sm max-[600px]:text-xs py-1 max-[600px]:py-2.5">
            About Me
          </TabsTrigger>
          <TabsTrigger value="education" className="min-w-0 max-[600px]:whitespace-normal max-[600px]:text-center whitespace-nowrap text-sm max-[600px]:text-xs py-1 max-[600px]:py-2.5">
            Education & Experience
          </TabsTrigger>
          <TabsTrigger value="contactme" className="min-w-0 max-[600px]:whitespace-normal max-[600px]:text-center whitespace-nowrap text-sm max-[600px]:text-xs py-1 max-[600px]:py-2.5">
            Contact Me
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <div className="mt-6 grid gap-4 sm:grid-cols-2 w400:gap-3">
            <section className="min-w-0">
              <h3 className="font-heading text-lg w400:text-base font-bold">My favourite words</h3>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-foreground">
                <li>Bouncebackability</li>
                <li>Grit</li>
                <li>Relentless</li>
                <li>Agency</li>
                <li>Doubt</li>
              </ul>
            </section>
            <section className="min-w-0">
              <h3 className="font-heading text-lg w400:text-base font-bold">My favourite phrases</h3>
              <ul className="mt-3 space-y-3 text-foreground w400:text-sm">
                <li>
                  <span className="italic">&ldquo;Comfort kills ambition&rdquo;</span>
                  <span className="ml-1 text-sm opacity-80">— Robert Kiyosaki</span>
                </li>
                <li>
                  <span className="italic">&ldquo;Be so good they can&apos;t ignore you&rdquo;</span>
                  <span className="ml-1 text-sm opacity-80">— Steve Martin</span>
                </li>
                <li>
                  <span className="italic">&ldquo;Today is the first day of the rest of your life&rdquo;</span>
                </li>
                <li>
                  <span className="italic">&ldquo;Pressure is a privilege&rdquo;</span>
                  <span className="ml-1 text-sm opacity-80">— Billie Jean King</span>
                </li>
              </ul>
            </section>
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div className="mt-4 min-w-0 space-y-4">
            <p className="w400:text-base">
              I&apos;m a finalist MSci student doing <span className="font-bold">Maths and Computer Science </span>
              at Durham University. My academic interests lie in autonomous
              systems and Reinforcement Learning, with most of my Mathematical
              background focusing on Bayesian statistics.
            </p>
            <p className="w400:text-base">
              My particular interests include Statistical Modelling, Data Archtecture, Team Leadership, Complex Decision Making, and Artifical Intelligence.
            </p>
            <div className="flex flex-wrap gap-3 w400:gap-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    className="font-heading text-lg font-bold underline decoration-2 underline-offset-2 hover:no-underline"
                  >
                    Societal Positions
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 max-w-full" side="bottom">
                  <ul className="list-inside list-disc space-y-1.5 text-sm">
                    <li>President - VM Tennis Club 24&apos;, 25&apos;</li>
                    <li>
                      President, Captain, Welfare Officer - VM Hockey Club
                      23&apos;, 24&apos; 25&apos;
                    </li>
                    <li>Social Executive - VM Mixed Lacrosse 23&apos;</li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button
                    type="button"
                    className="font-heading text-lg font-bold underline decoration-2 underline-offset-2 hover:no-underline"
                  >
                    Volunteering
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 max-w-full" side="bottom">
                  <ul className="list-inside list-disc space-y-1.5 text-sm">
                    <li>Code Club Volunteer 23&apos; - 26&apos;</li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="min-w-0 w-full overflow-hidden">
              <Marquee items={items} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="contactme">
          <h3 className="font-heading text-lg w400:text-base font-bold">LET'S CONNECT</h3>
          <p className="mt-4 w400:text-base">It has been a pleasure to have you here. Below are my contact details. I look forward to continuing the conversation</p>
          <div className="mb-8 mt-4 space-y-4">
            <div className="flex min-w-0 flex-wrap items-center gap-3 w400:gap-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-4 border-black bg-[#FFDE59] w400:h-10 w400:w-10">
                <Mail className="h-6 w-6 w400:h-5 w400:w-5" />
              </div>
              <span className="min-w-0 break-words text-lg w400:text-base">josht200@live.com</span>
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-3 w400:gap-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-4 border-black bg-[#FF5757] w400:h-10 w400:w-10">
                <Linkedin className="h-6 w-6 w400:h-5 w400:w-5 text-white" />
              </div>
              <span className="min-w-0 break-words text-lg w400:text-base">
                <Link className="underline" href="https://www.linkedin.com/in/joshuamichaelthompson/" target="_blank" rel="noopener noreferrer">Joshua Thompson, Armature Labs</Link>
              </span>
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-3 w400:gap-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-4 border-black bg-[#5CE1E6] w400:h-10 w400:w-10">
                <MapPin className="h-6 w-6 w400:h-5 w400:w-5" />
              </div>
              <span className="min-w-0 text-lg w400:text-base">London</span>
            </div>
          </div>
        
        </TabsContent>
      </Tabs>



    </div>
  )
}
