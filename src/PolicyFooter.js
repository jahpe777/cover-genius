import React from 'react';
import moment from 'moment';

const PolicyFooter = ({ data }) => {
  const newPaymentDate = moment(data.payment_date)
    .format('DD-MMM-YYYY')
    .toUpperCase();
  const newStartDate = moment(data.coverage_start_date)
    .format('DD-MMM-YYYY')
    .toUpperCase();
  const newEndDate = moment(data.coverage_end_date)
    .format('DD-MMM-YYYY')
    .toUpperCase();
  return (
    <footer className="policyFooter">
      <section className="paymentDate">
        <article className="paymentDate-content">
          <p>{newPaymentDate}</p>
          <p>Payment date</p>
        </article>
      </section>
      <section className="coverageDates">
        {data.status === 'expired' ? (
          <article className="coverageDays-content">
            <p>{newStartDate}</p>
            <div className="policy">
              <span>Date shipped</span>
              <div>
                <span className="data status expired">expired</span>
              </div>
            </div>
          </article>
        ) : (
          <article className="coverageDays-content">
            <p>
              {newStartDate} to {newEndDate}
            </p>
            <div className="policy">
              <span>Coverage dates</span>
              <span className="data status active">active</span>
            </div>
          </article>
        )}
      </section>
      <section className="price">
        <article>
          <p>{data.premium_formatted}</p>
          <p>Price/Premium</p>
        </article>
      </section>

      {data.renewal ? (
        <article className="renewal">
          <p>{data.renewal}</p>
          <p>Renewal</p>
        </article>
      ) : null}
      <aside className="logo mobile">
        <img src={data.partner.logo} alt="logo" />
      </aside>
    </footer>
  );
};

export default PolicyFooter;
