import React from "react";

const Footer2: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div
        style={{
          backgroundImage:
            "url('src/assets/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <a
              href="#"
              className="text-3xl font-pacifico text-white mb-4 inline-block"
            >
              Sobum
            </a>
            <p className="text-gray-400 mb-6">
              Gerakan untuk mengurangi sampah plastik dan menyelamatkan bumi
              kita untuk generasi mendatang.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <i className={`ri-${social}-fill text-white`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {[
                { id: "fakta", label: "Fakta Menarik" },
                { id: "cerita", label: "Data & Cerita" },
                { id: "artikel", label: "Artikel" },
                { id: "diskusi", label: "Ruang Diskusi" },
                { id: "tim", label: "Tim Kami" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Berlangganan</h3>
            <p className="text-gray-400 mb-4">
              Dapatkan update terbaru tentang gerakan pengurangan sampah
              plastik.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="px-4 py-2 bg-white/10 border-none text-white placeholder-gray-400 rounded-l focus:outline-none focus:bg-white/20 flex-1"
                required
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-r whitespace-nowrap"
              >
                Langganan
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Sobum - Sobat Bumi. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
