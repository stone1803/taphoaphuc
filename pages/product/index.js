import React from 'react'

export default function IndexProduct() {
    return (
  <div className="container">
  <br />
  <h4>Sản phẩm mà chúng tôi cung cấp !</h4>
  <br />
  <div className="row" id="ads">
    {/* Category Card */}
    <div className="col-md-4 mb-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Sản Phẩm</span>
          <img className="img-fluid" src="http://lazuvietnam.com/wp-content/uploads/2020/06/222-510x588.png" alt="Mật ong Manuka & Sữa non" />
        </div>
        <div className="card-image-overlay m-auto">
          <span className="card-detail-badge">1.250.000 VNĐ</span>
          <span className="card-detail-badge">Đã bán 150</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h5>Mật ong Manuka & Sữa non
</h5>
          </div>
          <a className="ad-btn" href="#">Xem chi tiết</a>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Sản Phẩm</span>
          <img className="img-fluid" src="http://lazuvietnam.com/wp-content/uploads/2020/06/333-510x588.png" alt="Mật ong Lazu Manuka" />
        </div>
        <div className="card-image-overlay m-auto">
          <span className="card-detail-badge">1.250.000 VNĐ</span>
          <span className="card-detail-badge">Đã bán 150</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h5>Mật ong Lazu Manuka

</h5>
          </div>
          <a className="ad-btn" href="#">Xem chi tiết</a>
        </div>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className="card rounded">
        <div className="card-image">
          <span className="card-notify-badge">Sản Phẩm</span>
          <img className="img-fluid" src="http://lazuvietnam.com/wp-content/uploads/2020/06/222-510x588.png" alt="Mật ong Manuka & Sữa non" />
        </div>
        <div className="card-image-overlay m-auto">
          <span className="card-detail-badge">1.250.000 VNĐ</span>
          <span className="card-detail-badge">Đã bán 150</span>
        </div>
        <div className="card-body text-center">
          <div className="ad-title m-auto">
            <h5>Mật ong Manuka & Sữa non
</h5>
          </div>
          <a className="ad-btn" href="#">Xem chi tiết</a>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
