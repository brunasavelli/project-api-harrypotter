import { redirect } from 'next/navigation';

export default function Home() {
    redirect('/sobre');
    return null;
}
