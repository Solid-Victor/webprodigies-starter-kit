import BackDropGradient from "@/components/global/backdrop-gradient"
import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Check, CheckCircleIcon } from "lucide-react"
import Link from "next/link"

type Props = {}

export const PricingSection = (props: Props) => {
  return (
    <div className="w-full pt-20 flex flex-col items-center gap-8 px-4"
    id="pricing"
    >
      <BackDropGradient className="w-full max-w-3xl h-full opacity-40">
        <GradientText element="H2" className="text-5xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </GradientText>
        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          Everything you need to efficiently manage your school's data and empower your students' success.
        </p>
      </BackDropGradient>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
        {/* Free Plan */}
        <Card className="p-8 bg-themeBlack border-themeGray hover:border-primary/50 transition-all">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Free Trial</p>
              <div className="flex items-baseline gap-2">
                <CardTitle className="text-4xl font-bold">$0</CardTitle>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            
            <CardDescription className="text-[#808080]">
              Perfect for trying out our platform
            </CardDescription>

            <Link href="#" className="w-full">
              <Button
                variant="default"
                className="w-full rounded-full bg-primary/10 hover:bg-primary/20"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <p className="flex items-center gap-2 text-primary font-medium">
              <CheckCircleIcon className="w-5 h-5" />
              Core Features
            </p>

            <div className="space-y-3">
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Basic student management</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Attendance tracking</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Grade management</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Basic reporting</p>
              </span>
            </div>
          </div>
        </Card>

        {/* Pro Plan */}
        <Card className="p-8 bg-themeBlack border-themeGray hover:border-primary/50 transition-all relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">Popular</span>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pro Plan</p>
              <div className="flex items-baseline gap-2">
                <CardTitle className="text-4xl font-bold">$99</CardTitle>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            
            <CardDescription className="text-[#808080]">
              Best for growing schools
            </CardDescription>

            <Link href="#" className="w-full">
              <Button
                variant="default"
                className="w-full rounded-full bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <p className="flex items-center gap-2 text-primary font-medium">
              <CheckCircleIcon className="w-5 h-5" />
              Everything in Free, plus:
            </p>

            <div className="space-y-3">
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Advanced analytics</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Parent portal access</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Custom reporting</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Priority support</p>
              </span>
            </div>
          </div>
        </Card>

        {/* Enterprise Plan */}
        <Card className="p-8 bg-themeBlack border-themeGray hover:border-primary/50 transition-all">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Enterprise</p>
              <div className="flex items-baseline gap-2">
                <CardTitle className="text-4xl font-bold">Custom</CardTitle>
              </div>
            </div>
            
            <CardDescription className="text-[#808080]">
              For large institutions
            </CardDescription>

            <Link href="#" className="w-full">
              <Button
                variant="default"
                className="w-full rounded-full bg-primary/10 hover:bg-primary/20"
              >
                Contact Sales
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <p className="flex items-center gap-2 text-primary font-medium">
              <CheckCircleIcon className="w-5 h-5" />
              Everything in Pro, plus:
            </p>

            <div className="space-y-3">
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Custom integration</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Dedicated support</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>SLA guarantees</p>
              </span>
              <span className="flex items-center gap-3 text-muted-foreground">
                <Check className="w-5 h-5 text-primary" />
                <p>Custom features</p>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}