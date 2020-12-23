import React from 'react';

const ErrorPrevention = () => {
  return (
    <>
      <h1>5. Error Prevention</h1>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <p>
        The goal is to design so well that we prevent errors before they even
        occur. However, it is important to account for errors by having well
        designed error messages. It is important to carefully check your
        products for error-prone conditions. It is also important to give users
        a confirmation option before making a choice they cannot easily recover
        from.
      </p>
      <h3>There are two types of errors:</h3>
      <p>
        Before discussing how to prevent errors, it’s important to note that
        there are two types of errors that users make: slips and mistakes. (Both
        are discussed in much greater detail in Don Norman’s book The Design of
        Everyday Things.)
      </p>
      <p>
        <strong>Slips</strong> occur when users intend to perform one action,
        but end up doing another (often similar) action. For example, typing an
        “i” instead of an “o” counts as a slip; accidentally putting liquid hand
        soap on one’s toothbrush instead of toothpaste is also a slip. Slips are
        typically made when users are on autopilot, and when they do not fully
        devote their attention resources to the task at hand.
      </p>
      <p>
        <strong>Mistakes</strong> are made when users have goals that are
        inappropriate for the current problem or task; even if they take the
        right steps to complete their goals, the steps will result in an error.
        For example, if I misunderstood the meaning of the oil-pressure warning
        light in my car, and thought it was the tire-pressure monitor, no matter
        how carefully I added air to my tires, it would not fix the issue with
        my oil pressure. This would be a mistake, since the goal that I was
        attempting to accomplish was inappropriate for the situation, even
        though I made no errors in executing my plan. Mistakes are conscious
        errors, and often (though not exclusively) arise when a user has
        incomplete or incorrect information about the task, and develops a
        mental model that doesn’t match how the interface actually works.
      </p>
      <h2>General Guidelines</h2>
      <p>
        Slips often happen when users are quite familiar with the goal that they
        seek to achieve and with the procedure for accomplishing that goal, but
        accidentally they take the wrong step when trying to achieve it. Often,
        when executing tasks that are well practiced, we tend to allocate fewer
        attentional resources, and, as a result, we can “slip” and perform the
        wrong action. Thus, ironically, slip-type mistakes often are made by
        expert users who are very familiar with the process at hand; unlike new
        users who are still learning how to use the system, experts feel that
        they have mastered the task and need to pay less attention to its actual
        completion. Strategies for preventing slips are centered around gently
        guiding users so that they stay on the right path and have fewer chances
        of slipping. Assist users by providing the needed level of precision,
        and encourage users to check for errors.
      </p>
      <h2>Include Helpful Constraints</h2>
      <p>
        Slips often happen when users are quite familiar with the goal that they
        seek to achieve and with the procedure for accomplishing that goal, but
        accidentally they take the wrong step when trying to achieve it. Often,
        when executing tasks that are well practiced, we tend to allocate fewer
        attentional resources, and, as a result, we can “slip” and perform the
        wrong action. Thus, ironically, slip-type mistakes often are made by
        expert users who are very familiar withInclude Helpful Constraints While
        it’s not always a good idea to limit users’ choices, in cases where
        there are clear rules that define acceptable options, it can be a good
        strategy to constrain the types of input users can make. For example,
        booking a flight typically involves selecting the dates of travel, and
        there are a few rules that govern which dates are acceptable. One of the
        major rules is that a return flight cannot happen before a departure. If
        users aren’t limited in the dates they can choose, they may slip and
        accidentally select a set of dates for their flight that don’t follow
        the rules. A helpful constraint here will force users to pick a date
        range that fits. the process at hand; unlike new users who are still
        learning how to use the system, experts feel that they have mastered the
        task and need to pay less attention to its actual completion. Strategies
        for preventing slips are centered around gently guiding users so that
        they stay on the right path and have fewer chances of slipping. Assist
        users by providing the needed level of precision, and encourage users to
        check for errors.
      </p>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
      <h2>Other Suggestions</h2>
      <p>
        Similarly to how constraints guide users toward the correct use of an
        interface, suggestions can preempt many slips before the user has the
        opportunity to make them. On websites that offer thousands of products,
        search is an effective way of helping users find their proverbial needle
        in a haystack. However, typing can be inaccurate, especially on
        touchscreens where there isn’t any tactile (also known as haptic)
        feedback. While you cannot prevent a user from making typos (which are
        slip-type errors), you can preempt typos from turning into problems by
        offering contextual suggestions while the user types. Offering search
        suggestions has also the benefit of supporting recognition over recall
        in those situations when the users misremember the name of the product
        or content they’re looking for.
      </p>
      {/* Make sure to have alt tag for image. */}
      <img src="" alt="" />
    </>
  );
};

export default ErrorPrevention;
