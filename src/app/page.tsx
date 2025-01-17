import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0C2340] to-[#1E3A5F]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Professional Resume Templates
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
            <div className="aspect-[4/5] relative bg-gray-100 p-4">
              <Image
                src="/template-1.png"
                alt="Classic Template"
                layout="responsive"
                width={4}
                height={5}
                className="rounded border border-gray-200"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
                Classic Template
              </h3>
              <p className="text-gray-600 mb-4">
                A traditional resume layout perfect for corporate and business professionals.
              </p>
              <Link
                href="/page-one"
                className="inline-flex items-center gap-2 bg-[#0C2340] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors"
              >
                <FileText size={20} />
                View Template
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
            <div className="aspect-[4/5] relative bg-gray-100 p-4">
              <Image
                src="/template-2.png"
                alt="Classic Template"
                layout="responsive"
                width={4}
                height={5}
                className="rounded border border-gray-200"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0C2340] mb-2">
                Modern Template
              </h3>
              <p className="text-gray-600 mb-4">
                A contemporary design featuring a clean and minimalist layout.
              </p>
              <Link
                href="/page-two"
                className="inline-flex items-center gap-2 bg-[#0C2340] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors"
              >
                <FileText size={20} />
                View Template
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}