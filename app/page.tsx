import { UserButton } from '@clerk/nextjs';
import { Button } from '../components/ui/button'
export default function Home() {
  return (
    <div className='flex flex-col gap-y-4'>
      Screen for authenticated users
      <div>
        <UserButton/>
      </div>
    </div>
  );
}
