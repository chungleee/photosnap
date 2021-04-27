import React from 'react';
import Check from '../Icons/Pricing/Check';
import classes from './PricingFeatureTable.module.scss';

const PricingFeatureTable = () => {
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
				<tr className={classes.table__group}>
					<th>
						<h2 className={classes.heading}>unlimited story posting</h2>
					</th>
					<tr className={classes.table__tiers}>
						<td>basic</td>
						<td>pro</td>
						<td>business</td>
					</tr>

					<tr className={classes.table__tiers}>
						<td>
							<Check />
						</td>
						<td>
							<Check />
						</td>
						<td>
							<Check />
						</td>
					</tr>
				</tr>
			</table>
		</div>
	);
};

export default PricingFeatureTable;
