import Layout from '@/layout/Layout.jsx';
import Card from "@/components/ui/Card";
import {Head} from '@inertiajs/react';
export default function Dashboard() {
    return (


            <Layout>
                <Head>
                    <title>دشبورد | صفحه اصلی </title>
                    <meta name="description" content="Your page description" />
                </Head>

                <Card title="Starter Kit"><p>hi this is admin dashboard</p></Card>
            </Layout>


    )
}
