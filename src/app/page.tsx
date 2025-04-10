import Image from "next/image";
import Link from 'next/link';

// Mock data cho truyện nổi bật
const featuredComics = [
  {
    id: '1',
    name: 'One Piece',
    slug: 'one-piece',
    thumb: 'https://via.placeholder.com/300x400?text=One+Piece',
    category: [{ name: 'Hành động', slug: 'hanh-dong' }],
    status: 'ongoing'
  },
  {
    id: '2',
    name: 'Naruto',
    slug: 'naruto',
    thumb: 'https://via.placeholder.com/300x400?text=Naruto',
    category: [{ name: 'Ninja', slug: 'ninja' }],
    status: 'completed'
  },
  {
    id: '3',
    name: 'Dragon Ball',
    slug: 'dragon-ball',
    thumb: 'https://via.placeholder.com/300x400?text=Dragon+Ball',
    category: [{ name: 'Siêu năng lực', slug: 'sieu-nang-luc' }],
    status: 'ongoing'
  },
  {
    id: '4',
    name: 'Bleach',
    slug: 'bleach',
    thumb: 'https://via.placeholder.com/300x400?text=Bleach',
    category: [{ name: 'Siêu nhiên', slug: 'sieu-nhien' }],
    status: 'completed'
  }
];

// Mock data cho thể loại
const categories = [
  { slug: 'hanh-dong', name: 'Hành động' },
  { slug: 'tinh-cam', name: 'Tình cảm' },
  { slug: 'hai-huoc', name: 'Hài hước' },
  { slug: 'kinh-di', name: 'Kinh dị' }
];

// Component cho một thẻ truyện
function ComicCard({ comic }: { comic: any }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow">
      <div className="relative aspect-[3/4] group">
        <img 
          src={comic.thumb}
          alt={comic.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 flex flex-col justify-end p-3">
          <span className="text-sm px-2 py-1 bg-pink-600 text-white rounded-full inline-block mb-2 w-fit">
            {comic.status === 'ongoing' ? 'Đang cập nhật' : 'Hoàn thành'}
          </span>
          <h3 className="text-white font-semibold line-clamp-2">{comic.name}</h3>
          <div className="text-gray-300 text-xs mt-1">
            {comic.category[0]?.name || 'Chưa phân loại'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-3 md:px-4 py-4 md:py-8 max-w-[1030px]">
        {/* Lịch sử đọc */}
        <section className="mb-8 bg-gray-800/50 rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Lịch sử đọc</h2>
          <p className="text-gray-400">Chưa có truyện nào trong lịch sử đọc.</p>
        </section>
        
        {/* Truyện nổi bật */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Truyện Nổi Bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredComics.map((comic) => (
              <Link key={comic.id} href={`/truyen/${comic.slug}`} className="block">
                <ComicCard comic={comic} />
              </Link>
            ))}
          </div>
        </section>

        {/* Truyện mới cập nhật */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Truyện mới cập nhật</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
            {featuredComics.map((comic) => (
              <Link key={comic.id} href={`/truyen/${comic.slug}`} className="block">
                <ComicCard comic={comic} />
              </Link>
            ))}
          </div>
        </section>

        {/* Các thể loại */}
        {categories.map((category) => (
          <section key={category.slug} className="mb-8 md:mb-12">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl font-bold">{category.name}</h2>
              <Link href={`/the-loai/${category.slug}`} className="text-pink-500 hover:text-pink-400 text-sm md:text-base">
                Xem tất cả
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
              {featuredComics.slice(0, 6).map((comic) => (
                <Link key={comic.id} href={`/truyen/${comic.slug}`} className="block">
                  <ComicCard comic={comic} />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
