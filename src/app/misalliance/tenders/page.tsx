'use client';

import { Button } from "@/components/ui/button"

interface Tender {
  id: number;
  startDate: string;
  name: string;
  bidNumber: string;
  quantity: string;
  bondAmount: string;
  openingDate: string;
}

const tenders: Tender[] = [
  {
    id: 1,
    startDate: '01 Apr 2025',
    name: 'Woliso Building Construction Project',
    bidNumber: '134/2024/25',
    quantity: '-',
    bondAmount: '2,000,000 ETB or Equivalent amount in USD',
    openingDate: '15 May 2025'
  },
  {
    id: 2,
    startDate: '08 Apr 2025',
    name: 'Computer-Based Cybersecurity Awareness and Phishing Simulation Solution',
    bidNumber: '135/2024/25',
    quantity: '-',
    bondAmount: 'ETB 2,000,000.00 (equivalent amount in USD)',
    openingDate: '13 May 2025'
  },
  {
    id: 3,
    startDate: '26 Mar 2025',
    name: 'Design, Supply and Installation of fitness/Wellness Center Sound System (Audio) Equipment\'s for CBE New HQ Building',
    bidNumber: '133/2024/25',
    quantity: '-',
    bondAmount: '400,000.00 ETB',
    openingDate: '15 May 2025'
  },
  {
    id: 4,
    startDate: '18 Mar 2025',
    name: 'Restaurant & fast Food on 4th – 5th floor in the Commercial Center at New CBE Head Quarter Building',
    bidNumber: '125/2024/25',
    quantity: '-',
    bondAmount: 'ETB 500,000 or Equivalent Amount in USD',
    openingDate: '22 Apr 2025'
  },
  {
    id: 5,
    startDate: '18 Mar 2025',
    name: 'Cinema Hall located on 7th floor in the Commercial Center Building at New CBE Head Quarter Building',
    bidNumber: '126/2024/25',
    quantity: '-',
    bondAmount: 'ETB 500,000 or Equivalent amount in USD',
    openingDate: '22 Apr 2025'
  }
];

interface TenderItemProps {
  tender: Tender;
}

const TenderItem = ({ tender }: TenderItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
      {/* Date Row */}
      <div className="font-bold bg-white text-[#8c2c94] p-4 flex justify-between">
        <div className="font-bold">Starting Date: <span className="text-black">{tender.startDate}</span></div>
        <div className="font-bold">Opening Date: <span className="text-black">{tender.openingDate}</span></div>
      </div>
      
      {/* Info Row */}
      <div className="p-6">
        <div className="grid grid-cols-5 gap-4 items-center">
          <div>
            <div className="text-sm font-medium text-[#963d9e] mb-1" style={{ color: '#963d9e' }}>Tender Name</div>
            <div className="font-medium text-black">{tender.name}</div>
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: '#963d9e' }}>Bid Number</div>
            <div className="text-black">{tender.bidNumber}</div>
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: '#963d9e' }}>Quantity</div>
            <div className="text-black">{tender.quantity}</div>
          </div>
          <div>
            <div className="text-sm font-medium" style={{ color: '#963d9e' }}>Bond Amount</div>
            <div className="text-black">{tender.bondAmount}</div>
          </div>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-[#963d9e] hover:bg-[#61006B] text-white"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Tenders() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/hero.png"
          alt="Tenders Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="max-w-2xl px-8 py-6">
              <h1 className="text-4xl font-bold mb-4 text-white">Tenders</h1>
              <p className="max-w-2xl text-base mb-4 text-white">
                Access official reports, updates, and insights from CBE—your trusted source for transparency, performance, and financial growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tenders Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#73007F] mb-8">Tenders</h2>
        
        {/* Tenders List */}
        <div className="space-y-4">
          {tenders.map((tender) => (
            <TenderItem key={tender.id} tender={tender} />
          ))}
        </div>
      </div>
    </div>
  );
}