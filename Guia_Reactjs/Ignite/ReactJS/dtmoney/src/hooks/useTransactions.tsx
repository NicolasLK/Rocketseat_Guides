import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api'

//interface TransactionInput {
    //title: string,
    //amount: number,
    //type: string,
    //category: string;
//}

//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>


interface Transactions {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string;
}

interface TransactionsProps {
    children: ReactNode,
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsContextData {
    transactions: Transactions[],
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}



export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children } : TransactionsProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    const url = "/transactions"
    useEffect(() => {
        try {
            api.get(url)
            .then(response => setTransactions(response.data.transactions))
        } catch (e) {
            console.log(e)
        }
  
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post(url, {
            ...transactionInput,
            createdAt: new Date(),
        })


        setTransactions([
            ...transactions,
            response.data.transactions,
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}


export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}
