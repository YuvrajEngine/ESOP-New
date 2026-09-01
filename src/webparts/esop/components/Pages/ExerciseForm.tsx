import * as React from "react";
import { useHistory, RouteComponentProps } from "react-router-dom";
import type { IEsopProps } from "../IEsopProps";
import Sidebar from "../Pages/SideBar";
import "../Esop.module.scss";

type IExerciseFormProps = IEsopProps & RouteComponentProps<{ id: string }>;

const ExerciseForm: React.FC<IExerciseFormProps> = (props) => {
  const history = useHistory();
  const [exercisePaymentManner, setExercisePaymentManner] = React.useState("");
  const [taxPaymentManner, setTaxPaymentManner] = React.useState("");

  return (
    <section className="dashboard-wrapper">
      <Sidebar userDisplayName={props.userDisplayName} />

      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="header-center">
            <span className="header-title">EXERCISE FORM</span>
          </div>
        </div>

        <div className="dashboard-body">
          <div className="form-card">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="SchemeName">
                  Scheme Name
                </label>
                <input id="SchemeName" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="GrantedShares">
                  Granted Shares
                </label>
                <input id="GrantedShares" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="VestedShares">
                  Vested Shares
                </label>
                <input id="VestedShares" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="GrantedOn">
                  Granted On
                </label>
                <input id="GrantedOn" type="date" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="VestedOn">
                  Vested On
                </label>
                <input id="VestedOn" type="date" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="VestingNo">
                  Vesting No
                </label>
                <input id="VestingNo" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="VestingPercent">
                  Vesting %
                </label>
                <input id="VestingPercent" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="LastExerciseDate">
                  Last Exercise Date
                </label>
                <input id="LastExerciseDate" type="date" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="ExercisePrice">
                  Exercise Price
                </label>
                <input id="ExercisePrice" type="number" className="form-input" />
              </div>
            </div>

            <hr className="form-divider" />

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="FullName">
                  Full Name<span className="required-mark"> *</span>
                </label>
                <input id="FullName" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="FullFatherName">
                  Full Father's Name<span className="required-mark"> *</span>
                </label>
                <input id="FullFatherName" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="FirstJointHolder">
                  First Joint Holder Name (if applicable)
                </label>
                <input id="FirstJointHolder" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="SecondJointHolder">
                  Second Joint Holder Name (if applicable)
                </label>
                <input id="SecondJointHolder" type="text" className="form-input" />
              </div>

              <div className="form-group form-group-full">
                <label className="form-label" htmlFor="FullPostalAddress">
                  Full Postal Address<span className="required-mark"> *</span>
                </label>
                <input id="FullPostalAddress" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="PinCode">
                  Pin Code<span className="required-mark"> *</span>
                </label>
                <input id="PinCode" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="TeleNo">
                  Tele No<span className="required-mark"> *</span>
                </label>
                <input id="TeleNo" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Age">
                  Age<span className="required-mark"> *</span>
                </label>
                <input id="Age" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="Pan">
                  Pan<span className="required-mark"> *</span>
                </label>
                <input id="Pan" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label">
                  Sex<span className="required-mark"> *</span>
                </label>
                <div className="form-radio-group">
                  <label className="form-radio-option">
                    <input type="radio" name="Sex" value="Male" />
                    Male
                  </label>
                  <label className="form-radio-option">
                    <input type="radio" name="Sex" value="Female" />
                    Female
                  </label>
                  <label className="form-radio-option">
                    <input type="radio" name="Sex" value="Other" />
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="EmployeeNumber">
                  Employee Number
                </label>
                <input id="EmployeeNumber" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="EmployeeName">
                  Employee Name
                </label>
                <input id="EmployeeName" type="text" className="form-input" />
              </div>

              <div className="form-group form-group-full">
                <label className="form-label" htmlFor="ResidentialStatus">
                  Residential Status as per the Income-tax Act, 1961
                </label>
                <input id="ResidentialStatus" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="EmailId">
                  E-Mail ID
                </label>
                <input id="EmailId" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="DateOfTermination">
                  Date of Termination
                </label>
                <input id="DateOfTermination" type="date" className="form-input" />
              </div>
            </div>

            <hr className="form-divider" />

            <div className="form-section">
              <span className="form-section-title">
                Option Details<span className="required-mark"> *</span>
              </span>

              <span className="form-subsection-title">
                (A) Number of options
              </span>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="OptionsAccepted">
                    No. of Options accepted
                  </label>
                  <input id="OptionsAccepted" type="number" className="form-input" />
                </div>
              </div>

              <div className="table-card">
                <div className="table-wrapper">
                  <table className="dashboard-table">
                    <thead>
                      <tr>
                        <th>Options Exercise till date</th>
                        <th>Options exercised vide this application</th>
                        <th>Exercise Price</th>
                        <th>Total Exercise Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="number" className="form-input" />
                        </td>
                        <td>
                          <input type="number" className="form-input" />
                        </td>
                        <td>
                          <input type="number" className="form-input" />
                        </td>
                        <td>
                          <input type="number" className="form-input" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="OptionsAcceptedWords">
                    Total options accepted (in words)
                  </label>
                  <input id="OptionsAcceptedWords" type="text" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="OptionsVested">
                    No. of options vested
                  </label>
                  <input id="OptionsVested" type="number" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="OptionsVestedWords">
                    Total options vested (in words)
                  </label>
                  <input id="OptionsVestedWords" type="text" className="form-input" />
                </div>
              </div>

              <span className="form-subsection-title">
                (B) Total Exercise Price Payable
              </span>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="TotalExercisePricePayable">
                    Total Exercise Price Payable
                  </label>
                  <input
                    id="TotalExercisePricePayable"
                    type="number"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Manner of Payment of Exercise Price
                  </label>
                  <div className="form-radio-group">
                    <label className="form-radio-option">
                      <input
                        type="radio"
                        name="ExercisePaymentManner"
                        checked={exercisePaymentManner === "Cheque"}
                        onChange={() => setExercisePaymentManner("Cheque")}
                      />
                      Pay by Cheque
                    </label>
                    <label className="form-radio-option">
                      <input
                        type="radio"
                        name="ExercisePaymentManner"
                        checked={exercisePaymentManner === "Other"}
                        onChange={() => setExercisePaymentManner("Other")}
                      />
                      Other
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <span className="form-banner-title">Payment details</span>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="PaymentAmountFigures">
                  Amount Rs (in figures)<span className="required-mark"> *</span>
                </label>
                <input id="PaymentAmountFigures" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="PaymentAmountWords">
                  Amount Rs (in words)<span className="required-mark"> *</span>
                </label>
                <input id="PaymentAmountWords" type="text" className="form-input" />
              </div>
            </div>

            <span className="form-banner-title">Details of payment</span>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="PaymentChequeNo">
                  Cheque No/Transaction Ref. No<span className="required-mark"> *</span>
                </label>
                <input id="PaymentChequeNo" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="PaymentDated">
                  Dated<span className="required-mark"> *</span>
                </label>
                <input id="PaymentDated" type="date" className="form-input" />
              </div>

              {exercisePaymentManner === "Cheque" && (
                <div className="form-group">
                  <label className="form-label" htmlFor="PaymentBankBranch">
                    Bank &amp; Branch<span className="required-mark"> *</span>
                  </label>
                  <input id="PaymentBankBranch" type="text" className="form-input" />
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="PaymentProof">
                  Payment Proof<span className="required-mark"> *</span>
                </label>
                <input id="PaymentProof" type="file" className="form-file-input" />
              </div>

              <div className="form-group form-group-full">
                <span className="form-note">
                  The cheque should be crossed 'A/C Payee' and drawn payable to " to be
                  inserted "
                </span>
              </div>
            </div>

            <span className="form-section-title">
              Manner of Payment of tax amount
            </span>

            <div className="form-grid">
              <div className="form-group form-group-full">
                <label className="form-label">
                  (A) Payment by Cheque for full tax amount (tick as appropriate)
                </label>
                <div className="form-radio-group">
                  <label className="form-radio-option">
                    <input
                      type="radio"
                      name="TaxPaymentManner"
                      checked={taxPaymentManner === "Cheque"}
                      onChange={() => setTaxPaymentManner("Cheque")}
                    />
                    Pay by Cheque
                  </label>
                  <label className="form-radio-option">
                    <input
                      type="radio"
                      name="TaxPaymentManner"
                      checked={taxPaymentManner === "Other"}
                      onChange={() => setTaxPaymentManner("Other")}
                    />
                    Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="TaxAmountFigures">
                  Amount Rs (in figures)
                </label>
                <input id="TaxAmountFigures" type="number" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="TaxAmountWords">
                  Amount Rs (in words)
                </label>
                <input id="TaxAmountWords" type="text" className="form-input" />
              </div>
            </div>

            <span className="form-banner-title">Details of Tax payment</span>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label" htmlFor="TaxChequeNo">
                  Cheque No/Transaction Ref. No<span className="required-mark"> *</span>
                </label>
                <input id="TaxChequeNo" type="text" className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="TaxDated">
                  Dated<span className="required-mark"> *</span>
                </label>
                <input id="TaxDated" type="date" className="form-input" />
              </div>

              {taxPaymentManner === "Cheque" && (
                <div className="form-group">
                  <label className="form-label" htmlFor="TaxBankBranch">
                    Bank &amp; Branch<span className="required-mark"> *</span>
                  </label>
                  <input id="TaxBankBranch" type="text" className="form-input" />
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="TaxProof">
                  Tax Proof<span className="required-mark"> *</span>
                </label>
                <input id="TaxProof" type="file" className="form-file-input" />
              </div>

              <div className="form-group form-group-full">
                <span className="form-note">
                  The cheque should be crossed 'A/C Payee' and drawn payable to " to be
                  inserted "
                </span>
              </div>
            </div>

            <div className="form-section">
              <span className="form-section-title">
                Demat Account details, if applicable
              </span>

              <span className="form-description">
                Please credit the equity shares allotted to my undermentioned account,
                which is held by me in the same order of names, as the application made
                to the Company. I attach herewith my account statement / copy of
                delivery instruction slip to enable the company to verify my account
                details.
              </span>

              <div className="form-grid">
                <div className="form-group form-group-full">
                  <label className="form-label" htmlFor="DpName">
                    Depository Participant (DP) Name<span className="required-mark"> *</span>
                  </label>
                  <input id="DpName" type="text" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="DpId">
                    DP ID<span className="required-mark"> *</span>
                  </label>
                  <input id="DpId" type="text" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ClientId">
                    Client ID<span className="required-mark"> *</span>
                  </label>
                  <input id="ClientId" type="text" className="form-input" />
                </div>
              </div>
            </div>

            <div className="form-section">
              <span className="form-section-title">Signature</span>

              <span className="form-description">
                I accept that no shares shall be issued to me, if applicable, on
                exercise of the options unless appropriate taxes as required under the
                applicable tax laws and the Plan are discharged.
              </span>

              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="SignatureDate">
                    Date<span className="required-mark"> *</span>
                  </label>
                  <input id="SignatureDate" type="date" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="SignaturePlace">
                    Place<span className="required-mark"> *</span>
                  </label>
                  <input id="SignaturePlace" type="text" className="form-input" />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="InPresenceOf">
                    In presence of
                  </label>
                  <input id="InPresenceOf" type="text" className="form-input" />
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-submit">
                <span>Submit</span>
              </button>
              <button type="button" className="btn-draft">
                <span>Save As Draft</span>
              </button>
              <button
                type="button"
                className="btn-back"
                onClick={() => history.push("/ExerciseDashboard")}
              >
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExerciseForm;