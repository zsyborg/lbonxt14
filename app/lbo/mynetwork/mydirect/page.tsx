'use client';
import Sidebar from "@/app/components/NewSideNav";
import { useMember } from '@/app/context/MemberContext';
         



export default function IDWise() {
    
    const { member, wallet, loading, iddownline } = useMember();


  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="grow grid-cols-1">
                <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>My Direct</h3>
              <div className="table-container">
             
              </div>
          </div>

        </div>
            

      </div>
    </>
  );
}
