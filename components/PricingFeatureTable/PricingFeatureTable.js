import React from 'react';
import Check from '../Icons/Pricing/Check';
import classes from './PricingFeatureTable.module.scss';

const PricingFeatureTable = ({ features }) => {
	return (
		<div>
			<table className={classes.table}>
				<tr className={classes.table__headings}>
					<th>
						<h2 className={classes.heading}>the features</h2>
					</th>
					<tr>
						<td>basic</td>
						<td>pro</td>
						<td>business</td>
					</tr>
				</tr>

				{features.map((feature) => {
					return (
						<tr className={classes.table__group} key={feature.feature}>
							<th>
								<h2 className={classes.heading}>{feature.feature}</h2>
							</th>
							<tr className={classes.table__tiers}>
								<td>basic</td>
								<td>pro</td>
								<td>business</td>
							</tr>

							<tr className={classes.table__tiers__checks}>
								<td>{feature.tiers.includes('basic') && <Check />}</td>
								<td>{feature.tiers.includes('pro') && <Check />}</td>
								<td>{feature.tiers.includes('business') && <Check />}</td>
							</tr>
						</tr>
					);
				})}
			</table>
		</div>
	);
};

export default PricingFeatureTable;
