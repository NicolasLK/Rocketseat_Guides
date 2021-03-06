import { useSession, signIn } from "next-auth/react"
import { api } from "../../services/api"
import { getStripeJs } from "../../services/stripe-js"
import styles from "./styles.module.scss"

interface SubscribeButtonProps {
    priceId: string,
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession()

    async function handleSubscribeButton() {
        if (!session) {
            signIn('github')
            return
        }

        try {
            const response = await api.post('/subscribe', {
                user: session.user
            })

            const { sessionId } = response.data

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribeButton}
        >
            Subscribe Now
        </button>
    )
}