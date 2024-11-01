export default function UserInput({onChange, userInputs}) {
    return (<section id="user-input" className="input-group">
        <div className="input-group">
            <p><label htmlFor="">Initial Investment</label>
                <input type="number" required value={userInputs.initialInvestment}
                onChange={(event) => onChange("initialInvestment", event.target.value)} />
            </p>
            <p><label htmlFor="">Annual Investment</label>
                <input type="number" required value={userInputs.annualInvestment}
                onChange={(event) => onChange("annualInvestment", event.target.value)}/>
            </p> 
            <p><label htmlFor="">Expected Return</label>
                <input type="number" required value={userInputs.expectedReturn}
                onChange={(event) => onChange("expectedReturn", event.target.value)} />
            </p>
            <p><label htmlFor="">Duration</label>
                <input type="number" required value={userInputs.duration} 
                onChange={(event) => onChange("duration", event.target.value)}/>
            </p>
            </div>
    </section>)
}