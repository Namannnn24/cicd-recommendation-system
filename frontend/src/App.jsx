import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error connecting to backend", error);
      alert("[ ERROR ]: Backend connection failed. Initialize Python server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Pitch black base with selection styling
    <div className="relative min-h-screen bg-[#050505] text-gray-100 font-sans overflow-hidden flex flex-col items-center pt-24 px-4 selection:bg-cyan-500/30">
      
      {/* --- Ambient Aurora Background --- */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[128px] opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      {/* --- Main UI Container --- */}
      <div className="relative z-10 w-full max-w-4xl space-y-12 pb-20">
        
        {/* Header Section */}
        <header className="text-center space-y-6">
          <div className="inline-block animate-in fade-in slide-in-from-top-4 duration-1000">
            {/* Cyberpunk Tag */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.1)] text-xs font-mono tracking-widest text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-glow mr-3"></span>
              PipeLine Genie
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter animate-in fade-in slide-in-from-top-8 duration-1000 delay-150">
           Automate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500">
              DevOps Workflow
            </span>
          </h1>
        </header>

        {/* --- Search Pill (Glassmorphism) --- */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-full p-2 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300 focus-within:bg-white/10 focus-within:border-cyan-500/50 focus-within:shadow-[0_0_30px_rgba(34,211,238,0.2)] animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <form onSubmit={handleAnalyze} className="flex items-center">
            <div className="pl-6 pointer-events-none text-2xl text-fuchsia-500 font-mono">
              {">_"}
            </div>
            <input 
              type="url" 
              required
              placeholder="Inject GitHub Repository URL..." 
              className="flex-1 bg-transparent border-0 text-white placeholder-gray-500 px-6 py-4 text-lg md:text-xl outline-none font-mono tracking-tight"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {/* Neon Button */}
            <button 
              type="submit" 
              disabled={loading}
              className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed group transition-transform active:scale-95"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#22D3EE_0%,#C084FC_50%,#22D3EE_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black/90 px-8 py-1 text-sm md:text-base font-bold text-white backdrop-blur-3xl transition-colors group-hover:bg-black/70">
                {loading ? (
                  <span className="flex items-center gap-2 font-mono">
                    <span className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></span>
                    COMPILING
                  </span>
                ) : (
                  'INITIATE ⚡'
                )}
              </span>
            </button>
          </form>
        </div>

        {/* --- Results Terminal (Hacker Vibe) --- */}
        {result && (
          <div className="animate-in zoom-in-95 slide-in-from-bottom-8 fade-in duration-700 backdrop-blur-2xl bg-[#0a0a0c]/80 border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* Results Header */}
            <div className="p-6 md:p-8 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Algorithm Generated</h2>
                <p className="text-gray-400 mt-1 font-mono text-sm">{result.message}</p>
              </div>
              
              {/* Tech Stack Badge */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-bold flex items-center shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                [ TARGET : {result.detected_technology.toUpperCase()} ]
              </div>
            </div>
            
            {/* VS Code / Terminal UI */}
            <div className="p-4 md:p-8 bg-black/50">
              <div className="bg-[#0D0D11] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                
                {/* Window Controls */}
                <div className="bg-[#1A1A24] px-4 py-3 flex items-center justify-between border-b border-white/5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-gray-500 text-xs font-mono tracking-widest uppercase">.github/workflows/genie.yml</span>
                  
                  <button 
                    onClick={() => navigator.clipboard.writeText(result.recommended_workflow)}
                    className="group relative px-3 py-1 text-xs font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="absolute inset-0 bg-white/5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    COPY
                  </button>
                </div>

                {/* Raw Code Output */}
                <pre className="p-6 overflow-x-auto text-sm md:text-base text-cyan-300 font-mono leading-relaxed">
                  <code>{result.recommended_workflow}</code>
                </pre>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default App;