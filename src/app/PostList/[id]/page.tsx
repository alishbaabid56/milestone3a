import Link from 'next/link';
import CommentsSection from '../../../components/CommentSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const posts: Record<string, { title: string; content: string; image: string }> = {
  1: { 
    title: 'Tropical Beach Paradise',
    content: "Imagine sinking your toes into powdery white sand while gazing at the endless horizon where  the sky meets the crystal-clear, turquoise waters. Tropical Beach Paradise offers visitors a rare combination of relaxation and adventure, where the serene landscape rejuvenates the soul. As you walk along the shore, feel the gentle ocean breeze cooling your skin under the warm sun. Early risers can catch the stunning sunrise, a golden spectacle as the sun emerges from the water, casting soft pastels across the sky. And in the evening, dont miss the sunset, where fiery reds and purples blend to create a scene worthy of any postcard.\n\nAdventure awaits just beneath the waters surface. Snorkeling in the shallows reveals a world alive with vibrant marine life; you might even spot colorful fish darting around coral reefs and, if youre lucky, gentle sea turtles gliding by. Dolphin-watching excursions offer a chance to see playful dolphins as they leap from the water, making for unforgettable memories. For the ultimate relaxation, unwind in a shaded hammock, lulled by the rhythmic sound of waves.\n\nFood lovers will also find paradise here. Tropical Beach Paradise is known for its delicious seafood, offering everything from grilled lobster to tangy ceviche, prepared with the freshest local ingredients. Accommodations range from cozy beachfront cabanas to luxurious villas with private views, ensuring that you can enjoy the beauty of this paradise from dawn till dusk. With its blend of natural beauty and tranquil vibes, this destination provides the perfect escape for anyone seeking both adventure and relaxation.",
    image: '/post1b.png' 
  },
  2: { 
    title: 'Emerald Valley', 
    content: "Step into Emerald Valley, a sanctuary of lush green landscapes, winding rivers, and majestic mountain peaks. This valley, untouched and pristine, is an adventure haven that calls to nature lovers and trekking enthusiasts alike. From gentle forest trails for beginners to more challenging routes that ascend to breathtaking vantage points, theres a trek here for everyone. Wander through dense, mist-covered forests where every turn reveals a new sight: babbling brooks, wildflowers dotting the trail, and if youre quiet enough, glimpses of rare wildlife such as exotic birds, deer, or even elusive mountain foxes.\n\nFor wildlife photographers, Emerald Valley offers endless opportunities. Capture rare bird species as they sing from treetops, or photograph the rugged beauty of mountain vistas that transform in the shifting light. Camping under a starlit sky is an experience not to be missed. At night, the valley becomes a tranquil wonderland where the only sounds are the soft rustle of leaves and the distant call of nocturnal creatures.\n\nThe valley also offers a retreat from modern life. With no cell service or city lights, youre free to disconnect and immerse yourself fully in the wilderness. Guided tours provide insights into the areas unique flora and fauna, making this a great spot for anyone interested in ecology. Whether you spend your time hiking, bird-watching, or simply soaking up the tranquil ambiance, Emerald Valley is a perfect place for those seeking rejuvenation in nature.",
    image: '/post2.png' 
  },
  3: { 
    title: 'The Golden Desert',
    content: "Embrace the magic of The Golden Desert, a vast, sun-drenched landscape of towering dunes and endless skies. This destination is a unique blend of adventure and culture, where the spirit of the desert comes alive through exhilarating experiences and rich traditions. Begin your journey with a camel safari, where you can traverse golden sands as ancient caravans once did, soaking in the silence and vastness of this remarkable landscape. Skilled guides lead you across rolling dunes to hidden spots that reveal the deserts stark beauty.\n\nAs evening falls, prepare for an immersive cultural experience at desert camps. Traditional music and dance performances unfold around a roaring fire, with local musicians playing instruments passed down through generations. Try delicious desert cuisine, from savory spiced meats to sweet pastries, all prepared using time-honored techniques. The ambiance is enriched by the warm hospitality of the desert people, who share stories of their heritage and the history of their land.\n\nFor stargazers, The Golden Desert offers a sky like no other. With no artificial lights to interfere, the stars appear incredibly bright against the vast darkness. Lie back on the cool sands and marvel at constellations you havve only seen in books, with the occasional shooting star streaking across the sky. The Golden Desert invites travelers not only to explore its landscape but also to connect deeply with its rich traditions, leaving you with memories that last a lifetime.",
    image: '/post3.png' 
  },

  4: { 
    title: 'MyStic Mountain',
    content: "Imagine a realm where towering peaks rise through a sea of clouds, their jagged silhouettes etched against the sky. Mystic Mountain is a destination that combines the thrill of adventure with the serenity of untouched nature, offering something unique for every traveler. Whether you're a thrill-seeker or someone looking for peace, this mystical place promises an unforgettable experience.For outdoor enthusiasts, Mystic Mountain is a haven of possibilities. Hike through dense forests along trails that lead to breathtaking vistas, each step revealing new wonders of the natural world. Paragliding over the valley offers a bird's-eye view of the lush terrain below, with the wind rushing past as you take in the beauty of the mountains from above. Rock climbing challenges abound, from beginner-friendly cliffs to advanced ascents, each climb rewarding adventurers with stunning views from the topMystic Mountain is not just a destination—its an experience that will leave an indelible mark on your soul. Whether youre scaling its peaks, exploring its hidden corners, or simply soaking in its tranquil beauty, Mystic Mountain offers an escape into a world where every moment feels magical and every memory is worth cherishing Every season brings a unique charm to Mystic Mountain, but spring and autumn are particularly enchanting with pleasant weather and vibrant landscapes. Visitors are advised to pack sturdy hiking boots, layered clothing, and a camera to capture the endless beauty of the mountains. Accommodations range from cozy mountain lodges to luxurious eco-resorts, ensuring a comfortable stay for all. The local cuisine, featuring freshly caught mountain trout, hearty bread, and herbal teas, offers a delicious taste of the regions culinary heritage.",
    image: '/post4.png' 
  },
  5: { 
    title: 'The Crystal Clear Lake',
    content: "Nestled in the heart of nature's untouched beauty lies The Crystal Clear Lake, a shimmering body of water so pure that it mirrors the sky above and the surrounding lush greenery with breathtaking clarity. This serene destination is a haven for those seeking tranquility, adventure, and an unparalleled connection to the natural world.\n\nAs you approach the lake, the first thing that captivates you is the pristine water. The clarity is so astonishing that you can see the sandy bottom even at the deepest points, with schools of fish gracefully swimming by. The surface glistens under the sun, creating a mesmerizing display of light and reflections. Surrounded by towering pine trees and colorful wildflowers, the lake feels like a sanctuary untouched by time.\n\nFor adventurers, The Crystal Clear Lake offers a variety of activities that make the most of its tranquil environment. Kayaking and canoeing across the serene waters provide a perfect way to explore the lake at your own pace, with every paddle stroke revealing hidden coves and breathtaking views. Fishing enthusiasts will delight in the abundance of freshwater fish, with the promise of a rewarding catch. Swimming in the cool, transparent waters is an invigorating experience, leaving you refreshed and rejuvenated.\n\nNature lovers and photographers will find endless inspiration here. The lake is home to a diverse range of flora and fauna. Early mornings bring the sound of birdsong echoing through the trees, while the sight of deer coming to the water's edge for a drink adds a magical touch to the experience. The changing light throughout the day, from the soft glow of dawn to the golden hues of sunset, transforms the lake into a living canvas that photographers will adore.\n\nHikers and explorers can venture along the scenic trails that encircle the lake. These paths wind through forests, meadows, and rocky outcroppings, offering panoramic views of the water and the surrounding landscape. Each step reveals the intricate details of the natural world, from moss-covered stones to vibrant bursts of color from wildflowers dotting the path.\n\nAs evening falls, the lake becomes a serene retreat under a sky filled with stars. Campfires glow softly along its shores, where visitors gather to share stories, roast marshmallows, and reflect on the day’s adventures. The Crystal Clear Lake is more than just a destination; it’s an experience that lingers in the heart and soul long after you’ve left its shores.",
    image: '/post5.png'
  },
  6: { 
    title: 'Island Of Dream',
    content: "Perched high above the crashing waves of the sea, Sunset Cliff offers an awe-inspiring view that feels like the edge of the world. This dramatic location, where the land meets the vast expanse of ocean, is a place of natural beauty, raw power, and peaceful solitude. As the sun dips below the horizon, the cliff comes alive with an explosion of colors, painting the sky in hues of orange, pink, and purple that reflect off the water below.\n\nSunset Cliff is a haven for adventurers and romantics alike. The rocky pathways leading to the cliffs edge invite exploration, with every step revealing new perspectives of the jagged coastline and the endless ocean beyond. For those with a love of the sea, this location is ideal for whale watching during migration season, where you might catch glimpses of these majestic creatures breaching the waves. Birdwatchers will also find joy in observing the seabirds that soar gracefully through the sky, their calls echoing over the cliffs.\n\nThe cliffs unique rock formations and tidal pools add to its charm. These pools, carved by the relentless power of the ocean, are teeming with marine life, from colorful anemones to tiny crabs scuttling about. A walk along the shoreline at low tide reveals these hidden treasures, offering a glimpse into the vibrant ecosystem that thrives here.\n\nFor photographers, Sunset Cliff is a dream come true. The interplay of light and shadow, the contrast between the rugged rocks and the smooth sea, and the ever-changing colors of the sky provide endless opportunities for stunning shots. Whether youre capturing the dramatic waves crashing against the rocks or the serene beauty of a sunset, every angle is picture-perfect.\n\nIn the evening, as the day transitions to night, the cliff becomes a peaceful retreat. The sound of the waves creates a soothing soundtrack, and the cool sea breeze carries the scent of salt and earth. Visitors often gather to watch the stars appear one by one, their reflections shimmering in the water below. Sunset Cliff is more than just a place to watch the sunset; its a destination that captivates the soul and leaves you with unforgettable memories of natures beauty and power.",
    image: '/post6b.png'
  },
  7: { 
    title: "Lost Lagoon",
    content: "Lost Lagoon is a serene sanctuary, hidden amidst a lush, untouched wilderness. The lagoon is enveloped by dense vegetation, where vibrant green leaves and colorful flora create an atmosphere of peace and seclusion. As you approach the lagoon, its pristine waters shimmer like a mirror, reflecting the surrounding beauty and creating a sense of boundless tranquility. Canoe rides across the lagoon offer an intimate exploration of its calm surface, where the water is so clear you can see schools of vibrant fish darting beneath. Visitors can spot aquatic plants swaying gently, adding a touch of life to this idyllic setting. The air is filled with the sweet aroma of blooming flowers, mingling with the subtle scent of damp earth, offering a multi-sensory experience of natures perfection. Cozy hammocks on the shoreline provide the perfect resting spots, where visitors can relax, read, or simply close their eyes and listen to the soft rustling of leaves. \n\nAs the day wanes, Lost Lagoon transforms into a dreamscape, with the setting sun casting hues of gold, pink, and lavender across the water. The evening sky reflects on the lagoons surface, creating a breathtaking spectacle that captivates every visitor. The lagoons tranquility is complemented by the gentle calls of birds returning to their nests, adding a touch of life to the quiet surroundings. Couples and families gather on the shore to witness the sunset, while solitary wanderers find solace in the stillness. Lost Lagoon is more than just a destination—it is a place to rejuvenate the soul, connect with nature, and immerse oneself in a moment of undisturbed serenity. It is where time seems to pause, allowing you to savor every second of its natural beauty.",
    image: "/post7.png"
  },
  8: { 
    title: "Frozen Paradise",
    content: "Frozen Paradise is a dazzling realm where winters embrace creates an unending wonderland of snow and ice. The landscape is blanketed in pristine white, with snowflakes glistening under the sunlight like scattered diamonds. Frozen lakes, bordered by frost-covered pines, serve as tranquil mirrors reflecting the stunning surroundings. Adventurers can explore a world of thrills, skiing and snowboarding down expertly groomed slopes, while families revel in the joy of sledding and building snowmen. For those seeking a slower pace, snowshoe trails meander through enchanting forests, where every branch sparkles with a layer of ice. Cascading frozen waterfalls stand as towering sculptures, their intricate patterns formed by the gentle touch of winters chill. \n\nWhen the days adventures come to an end, the warmth of cozy mountain lodges beckons. Inside, the comforting crackle of fireplaces and the rich aroma of hot cocoa offer respite from the cold. As night falls, the true magic of Frozen Paradise unfolds under the expansive, star-studded sky. On particularly clear nights, visitors are treated to the awe-inspiring display of the Northern Lights, their vibrant hues of green, pink, and purple dancing across the heavens. The combination of natures grandeur and human comfort makes Frozen Paradise a destination that appeals to both the adventurous spirit and the romantic soul, leaving an indelible mark on the hearts of all who visit.",
    image: "/post8.png"
  },
  9: { 
    title: "Whispering Woods",
    content: "Whispering Woods is an otherworldly haven, where ancient trees whisper secrets carried on the wind. The forest is alive with life, its towering trees creating a protective canopy that filters sunlight into enchanting patterns on the moss-covered ground. Each path is a winding invitation to explore, leading visitors to discover hidden glades filled with wildflowers, crystal-clear brooks that babble softly, and cascading waterfalls that sparkle in the sunlight. The air is alive with the melodies of chirping birds, the occasional rustle of small animals, and the distant hum of natures quiet symphony. Every step into Whispering Woods feels like stepping back in time, where the untamed wilderness evokes a sense of wonder and reverence for the natural world. \n\nAs the sun dips below the horizon, Whispering Woods transforms into a realm of mystery and magic. The forest floor glows faintly as fireflies emerge, their lights twinkling like a million stars scattered among the trees. The quiet hum of the night, punctuated by the occasional call of an owl, adds an ethereal quality to the experience. This mystical ambiance makes Whispering Woods a haven for dreamers, artists, and seekers of solace. Whether you come to hike its winding trails, photograph its untouched beauty, or simply lose yourself in its serene embrace, Whispering Woods promises an unforgettable journey where natures voice speaks to those who listen.",
    image: "/post9.png"
  }
};

type PostProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  return Object.keys(posts).map((id) => ({ id }));
}

export default function Post({ params }: PostProps) {
  const post = posts[params.id as string];

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">{post.title}</h1>

        <div className="flex justify-center">
          <img
            src={post.image}
            alt={post.title}
            className="mt-2 w-full max-w-[800px] h-60 object-cover rounded"
          />
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-800 mt-4 leading-relaxed">
          {post.content}
        </p>

        <div >
          <Link href="/" passHref>
            <button className="mt-6 bg-blue-600 text-white  px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-blue-400 transition duration-200">
              Back to Home
            </button>
          </Link>
        </div>
      

        <CommentsSection />
      </div>
      <Footer />
    </div>
    
  );
}