import "@/components/footer/footer.css"


export default function Footer(){
  return (
    <>
      <section className="trust-bar">
        <div className="trust-item">
          <div className="trust-icon facebook">
            <div className="f-logo">
              <svg viewBox="0 0 320 512" width="14" height="14" fill="#1e357f"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
            </div>
            <div className="trust-icon-text">
              <strong>Marketing</strong>
              <span>Partner</span>
            </div>
          </div>
          <p>Facebook Premier<br />Level Agency Partner</p>
        </div>

        <div className="trust-item">
          <div className="trust-icon google">
            <div className="g-logo">
              <svg viewBox="0 0 488 512" width="12" height="12" fill="#1e357f"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
            </div>
            <div className="trust-icon-text">
              <strong>Google Partner</strong>
            </div>
          </div>
          <p>Google Endorsed<br />Marketing Partner</p>
        </div>

        <div className="trust-item">
          <div className="trust-icon forbes">
            <span className="forbes-logo">Forbes</span>
            <span className="forbes-sub">Official Member</span>
          </div>
          <p>Forbes Agency<br />Council Member</p>
        </div>

        <div className="trust-item">
          <div className="trust-icon inc">
            <strong>Inc.</strong>
            <span>5000</span>
          </div>
          <p>Inc. 5000<br />Fastest Growing Company</p>
        </div>

        <div className="trust-item text-only">
          <h3>$100M</h3>
          <p>In Annual<br />Digital Ad Spend</p>
        </div>

        <div className="trust-item text-only">
          <h3>15+</h3>
          <p>Years of Facebook<br />Advertising Experience</p>
        </div>
      </section>
    </>
  )

}
