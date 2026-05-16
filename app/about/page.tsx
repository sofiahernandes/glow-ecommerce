import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Heading */}
        <section className="w-full py-36 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-bold tracking-tight text-4xl md:text-5xl">
                  About Glow
                </h1>
                <p className="mx-auto max-w-[250px] text-gray-500 leading-tight">
                  Our journey, mission, and story. This is why we do what we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="grid gap-6 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Our Story
                </div>
                <h2 className="text-xl font-bold tracking-tight">
                  Change your destiny one step at a time
                </h2>
                <p className="text-gray-500 text-justify my-1">
                  Life can be overwhelming. The never-ending to-do lists, the
                  pressure to have it all together, the feeling that time is
                  slipping through your fingers. We see you. We know what it’s
                  like to crave structure but also freedom—to{' '}
                  <span className="italic text-blue-700">
                    dream big yet feel stuck in the everyday chaos
                  </span>
                  . That’s why Glow was born. Not just as a brand but as a
                  movement. A space where women like you can heal, grow, and
                  thrive.🦋
                </p>

                <p className="text-gray-500 text-justify my-1">
                  Our digital planners, templates, and calendars aren’t just
                  tools; they are{' '}
                  <span className="italic text-blue-700">stepping stones</span>{' '}
                  to the life you’ve been envisioning. We’re here to support
                  your journey—one intentional step at a time.
                </p>

                <p className="text-gray-500 text-justify my-1">
                  At Glow, we believe that growth isn’t about perfection—it’s
                  about progress. And we’re here to remind you:{' '}
                  <span className="italic text-blue-700">YOU CAN DO IT</span>.
                  You are worthy. You are limitless.{' '}
                  <span className="italic text-blue-700">
                    Welcome to Glow. Your next chapter starts now.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* Our Values */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  What we stand for
                </h2>
                <p className="mx-auto max-w-[250px] text-gray-500">
                  The principles that guide everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-x-20 border border-gray-200 p-10 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-500 leading-tight">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action (Link to Products) */}
        <section className="w-full py-24 bg-blue-100 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-black">
                  Ready to transform Your Life?
                </h2>
                <p className="mx-auto max-w-[350px] text-black">
                  Explore our collection of digital products designed to help
                  you heal, grow, and thrive.
                </p>
              </div>
              <Button
                asChild
                className="border border-blue-600 bg-blue-600 text-white hover:bg-blue-100 hover:text-blue-600"
              >
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const values = [
  {
    icon: '🦋',
    title: 'Thriving, Not Just Surviving',
    description:
      'You deserve more than just getting by. Our mission is to help you step into the best version of yourself.',
  },
  {
    icon: '📈',
    title: 'Progress Over Perfection',
    description:
      'Small, consistent steps lead to big changes. We celebrate every win, no matter how small.',
  },
  {
    icon: '✨',
    title: 'Community & Connection',
    description:
      'You’re never alone on this journey. Glow is more than a brand—it’s a space for support and inspiration.',
  },
  {
    icon: '🧠',
    title: 'Empowered Mindset',
    description:
      'When you plan with intention, you unlock your potential. We design products that fuel confidence and clarity.',
  },
]
